import { CartProvider } from '../context/CartProvider';
import CartPage from '../pages/cart';
import { render, screen } from '@testing-library/react';

describe('CartPage', () => {
  describe('GIVEN not mounted in a provider', () => {
    test('THEN should throw an error', () => {
      expect(() => render(<CartPage />)).toThrowErrorMatchingInlineSnapshot(
        `"useCart must be used inside a Cart Provider"`,
      );
    });
  });

  describe('GIVEN not mounted in a provider', () => {
    let Component: React.ReactElement;

    beforeEach = () => {
      Component = (
        <CartProvider>
          <CartPage />
        </CartProvider>
      );
    };

    test('THEN should render correctly', () => {
      render(Component);
      expect(screen.findByText(/total/i)).toBeTruthy();
    });
  });
});
