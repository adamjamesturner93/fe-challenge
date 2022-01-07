import { useCart, CartProvider } from '../context/CartProvider';
import { renderHook } from '@testing-library/react-hooks';
import { CartItem } from '../types';

const wrapper: React.FC = ({ children }) => (
  <CartProvider>{children}</CartProvider>
);

const MOCK_ITEM = {
  name: 'test name',
  gtin: '001',
  recommendedRetailPrice: 29.99,
  recommendedRetailPriceCurrency: 'EUR',
  imageUrl: 'test_url',
  brandName: 'test_brand',
  categoryName: 'test_category',
};

const MOCK_CART_ITEM: CartItem = {
  ...MOCK_ITEM,
  quantity: 1,
};

describe('CartPage', () => {
  test('should start with no items in the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.total).toBe(0);
    expect(result.current.items).toEqual([]);
  });

  test('add item should add to the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    result.current.addItem(MOCK_ITEM);
    expect(result.current.total).toBe(MOCK_ITEM.recommendedRetailPrice);
    expect(result.current.items).toEqual([MOCK_CART_ITEM]);
  });

  test('remove item should remove an item from the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    result.current.addItem(MOCK_ITEM);
    expect(result.current.total).toBe(MOCK_ITEM.recommendedRetailPrice);
    expect(result.current.items).toEqual([MOCK_CART_ITEM]);
    result.current.removeItem(MOCK_ITEM);
    expect(result.current.total).toBe(0);
    expect(result.current.items).toEqual([]);
  });

  test('update quantity should update an existing item in the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    result.current.addItem(MOCK_ITEM);
    expect(result.current.total).toBe(MOCK_ITEM.recommendedRetailPrice);
    expect(result.current.items).toEqual([MOCK_CART_ITEM]);

    const cartItem: CartItem = {
      ...MOCK_ITEM,
      quantity: 1,
    };
    result.current.changeQuantity(cartItem, 5);
    expect(result.current.total).toBe(MOCK_ITEM.recommendedRetailPrice * 5);
    expect(result.current.items).toEqual([
      {
        ...MOCK_CART_ITEM,
        quantity: 5,
      },
    ]);
  });
});
