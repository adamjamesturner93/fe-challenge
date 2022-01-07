import { Product } from '../types';
import Image from 'next/image';
import { useCart } from '../context/CartProvider';
import React from 'react';

type ProductCardProps = Product & { isCart?: boolean };

export const ProductCard: React.FC<ProductCardProps> = (product) => {
  const { addItem, removeItem, items } = useCart();
  const {
    gtin,
    name,
    recommendedRetailPrice,
    recommendedRetailPriceCurrency,
    imageUrl,
    brandName,
    categoryName,
    isCart = false,
  } = product;

  if (!gtin) {
    // Skeleton Loader
    return (
      <article className="flex flex-col text-xs bg-gray-50 px-4 py-2 animate-pulse rounded-lg drop-shadow-lg">
        <h3 className="font-semibold">
          <div className="text-base bg-gray-300 h-4 rounded-full my-2" />
        </h3>
        <div className="flex flex-col xl:flex-row gap-x-2 items-center justify-center">
          <div className="w-20 bg-gray-300 h-20 rounded-full " />
          <div className="flex flex-col justify-center flex-grow text-gray-900">
            <p className={'text-gray-700 flex'}>
              <span className="font-semibold text-gray-900">Brand:</span>
              <span className="bg-gray-300 h-3 flex-grow rounded-full mx-4" />
            </p>
            <p className={'text-gray-700 flex'}>
              <span className="font-semibold text-gray-900">Category:</span>
              <span className="bg-gray-300 h-3 flex-grow rounded-full mx-4" />
            </p>
            <p className={'text-gray-700 flex'}>
              <span className="font-semibold text-gray-900">Currency:</span>
              <span className="bg-gray-300 h-3 flex-grow rounded-full mx-4" />
            </p>
            <p className={'text-gray-700 flex'}>
              <span className="font-semibold text-gray-900">RRP:</span>
              <span className="bg-gray-300 h-3 flex-grow rounded-full mx-4" />
            </p>
            <button>Add to Cart</button>
          </div>
        </div>
      </article>
    );
  }

  const cartItem = items.find((item) => item.gtin === gtin);
  console.log(cartItem, isCart);

  return (
    <article className="flex flex-col text-xs bg-gray-50 px-4 py-2 rounded-lg drop-shadow-lg">
      <h3 className="font-semibold text-center">{name}</h3>
      <div
        className={`flex ${
          isCart ? 'flex-row' : 'flex-col xl:flex-row'
        } gap-x-2 items-center justify-center`}
      >
        <Image
          src={imageUrl}
          alt={name}
          className={'h-20 w-20 rounded-full'}
          height={'100%'}
          width={'100%'}
        />
        <div className="flex flex-col justify-center py-2 px-4 text-gray-900">
          <p className={'text-gray-700'}>
            <span className="font-semibold text-gray-900">Brand:</span>{' '}
            {brandName}
          </p>
          <p className={'text-gray-700'}>
            <span className="font-semibold text-gray-900">Category:</span>{' '}
            {categoryName}
          </p>
          <p className={'text-gray-700'}>
            <span className="font-semibold text-gray-900">Currency:</span>{' '}
            {recommendedRetailPriceCurrency}
          </p>
          <p className={'text-gray-700'}>
            <span className="font-semibold text-gray-900">RRP:</span>{' '}
            {recommendedRetailPrice}
          </p>
        </div>
      </div>
      {!cartItem ? (
        <button
          className="mx-auto my-2 py-2 px-4 bg-gray-100 rounded-xl border hover:bg-gray-200 transition drop-shadow-sm"
          onClick={() => addItem(product)}
        >
          Add to Cart
        </button>
      ) : (
        <button
          className="mx-auto my-2 py-2 px-4 bg-gray-100 rounded-xl border hover:bg-gray-200 transition drop-shadow-sm"
          onClick={() => removeItem(product)}
        >
          Remove from Cart
        </button>
      )}
    </article>
  );
};
