import { useSWRInfinite } from 'swr';
import { Product, ProductsResponse } from '../types';
import { fetcher } from './fetcher';

const BASE_URL = 'api/';
const SKELETON_DATA: Product = {
  name: '',
  gtin: '',
  recommendedRetailPrice: 0,
  recommendedRetailPriceCurrency: '',
  imageUrl: '',
  brandName: '',
  categoryName: '',
};

export const usePaginatedProducts = (path: string) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = BASE_URL + path;

  const { data, error, size, setSize } = useSWRInfinite<ProductsResponse>(
    (index: number) => `${url}?temp=${index + 1}`,
    fetcher,
  );

  const products: Product[] =
    data?.map(({ results }) => results).flat() || Array(20).fill(SKELETON_DATA);
  const isEmpty = data?.[0]?.count === 0;
  const isReachingEnd = isEmpty || data?.[0]?.count === products.length;

  if (error) {
    // Here I would log the error and session details to somewhere central for observability.
  }
  return { products, error, size, setSize, isReachingEnd };
};
