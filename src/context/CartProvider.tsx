import React from 'react';
import { Product } from '../types';

export type CartContextProps = {
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  total: number;
  items: CartItem[];
};

const CartContext = React.createContext<CartContextProps | undefined>(
  undefined,
);

type CartItem = Product & { quantity: number };
type Cart = Record<string, CartItem>;

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = React.useState<Cart>({});

  const addItem = (product: Product) => {
    const existingItem = cart[product.gtin];
    const cartItem: CartItem = {
      ...product,
      quantity: existingItem ? ++cart[product.gtin].quantity : 1,
    };
    setCart((prev) => ({
      ...prev,
      [product.gtin]: cartItem,
    }));
  };
  const removeItem = () => {
    return;
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
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside a Card Provider');
  }

  return context;
};
