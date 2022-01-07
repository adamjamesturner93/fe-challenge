import React from 'react';
import { Cart, CartItem, Product } from '../types';

export type CartContextProps = {
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  changeQuantity: (product: CartItem, quantity: number) => void;
  total: number;
  items: CartItem[];
};

const CartContext = React.createContext<CartContextProps | undefined>(
  undefined,
);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = React.useState<Cart>({});

  const addItem = (product: Product) => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    };
    setCart((prev) => ({
      ...prev,
      [product.gtin]: cartItem,
    }));
  };

  const removeItem = (product: Product) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[product.gtin];
      return newCart;
    });
  };

  const changeQuantity = (product: CartItem, quantity: number) => {
    const existingItem = cart[product.gtin];
    const cartItem: CartItem = {
      ...existingItem,
      quantity,
    };

    setCart((prev) => ({
      ...prev,
      [existingItem.gtin]: cartItem,
    }));
  };
  const items = Object.values(cart);
  const total = items.reduce(
    (acc, cur) => acc + cur.quantity * cur.recommendedRetailPrice,
    0,
  );

  const value: CartContextProps = {
    addItem,
    removeItem,
    items,
    total,
    changeQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside a Cart Provider');
  }

  return context;
};
