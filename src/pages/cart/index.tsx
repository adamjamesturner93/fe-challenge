import React from 'react';
import { Layout, ProductCard } from '../../components';
import { useCart } from '../../context/CartProvider';
const CartPage = () => {
  const { total, items, changeQuantity } = useCart();
  return (
    <Layout>
      <h1>Your Cart</h1>
      <div className="grid grid-cols-8 grid-flow-row gap-x-8 gap-y-5">
        <div className="col-span-6 md:col-span-4">
          <p>Product</p>
        </div>
        <div className="col-span-2 md:col-span-4 flex flex-col md:grid md:grid-cols-3 justify-center">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        {items.map((item) => (
          <React.Fragment key={item.gtin}>
            <div className="col-span-6 md:col-span-4">
              <ProductCard {...item} isCart={true} />
            </div>
            <div className="col-span-2 md:col-span-4 flex flex-col md:grid md:grid-cols-3 justify-center">
              <p>
                {item.recommendedRetailPriceCurrency}{' '}
                {item.recommendedRetailPrice}
              </p>
              <input
                className="h-6 pl-4 py-2 w-16"
                type="number"
                step={1}
                min={1}
                value={item.quantity}
                onChange={(event) =>
                  changeQuantity(item, +event.currentTarget.value)
                }
              />
              <p>
                {item.recommendedRetailPriceCurrency}{' '}
                {(item.recommendedRetailPrice * item.quantity).toFixed(2)}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <p>Total: €{total.toFixed(2)}</p>
    </Layout>
  );
};

export default CartPage;
