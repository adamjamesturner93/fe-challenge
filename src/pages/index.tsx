import { Layout, ProductCard } from '../components';
import { usePaginatedProducts } from '../utils/useLoadPages';

const HomePage = () => {
  const { products, error, size, setSize, isReachingEnd } =
    usePaginatedProducts('products');

  return (
    <Layout>
      <p
        role="alert"
        style={{ display: error ? 'block' : 'none' }}
        className="sticky top-5 z-50 text-center bg-red-700 rounded-lg py-4 text-white font-bold px-8"
      >
        Unfortunately we have encountered an error. Please refresh the page and
        try again or come back later
      </p>

      <h1 className="font-bold text-2xl">Products</h1>
      <section>
        <h2 className="font-semibold text-lg">All products</h2>
        <div className="grid grid-flow-row gap-x-8 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.gtin || Math.random()} {...product} />
          ))}
        </div>
        <div className="flex justify-center">
          {!error && !isReachingEnd && (
            <button
              className="px-8 py-4 mx-auto my-8 bg-gray-50 drop-shadow-xl rounded-lg"
              onClick={() => setSize(size + 1)}
            >
              Load more...
            </button>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
