import { Product } from '../types';
import Image from 'next/image';

export const ProductCard: React.FC<Product> = ({
  gtin,
  name,
  recommendedRetailPrice,
  recommendedRetailPriceCurrency,
  imageUrl,
  brandName,
  categoryName,
}) => {
  if (!gtin) {
    // Skeleton Loader
    return (
      <article className="flex flex-col text-xs bg-gray-50 px-4 py-2 animate-pulse rounded-lg drop-shadow-lg">
        <h3 className="font-semibold">
          <div className="text-base bg-gray-300 h-4 rounded-full my-2" />
        </h3>
        <div className="flex gap-x-2">
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
  return (
    <article className="flex flex-col text-xs bg-gray-50 px-4 py-2 rounded-lg drop-shadow-lg">
      <h3 className="font-semibold">{name}</h3>
      <div className="flex gap-x-2">
        <Image
          src={imageUrl}
          alt={name}
          className={'h-20 w-20 rounded-full'}
          height={'100%'}
          width={'100%'}
        />
        <div className="flex flex-col justify-center  text-gray-900">
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
          <button>Add to Cart</button>
        </div>
      </div>
    </article>
  );
};
