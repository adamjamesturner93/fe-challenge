import {Layout, ProductCard} from '../components';
import { useState } from 'react';
import { Product } from '../types';

const HomePage = () => {
    const skeleton: Product = {
        "name": "",
        "gtin": "",
        "recommendedRetailPrice": 0,
        "recommendedRetailPriceCurrency": "",
        "imageUrl": "",
        "brandName": "",
        "categoryName": ""
    }
    const [products] = useState<Product[]>(Array(20).fill(skeleton))

    return (
        <Layout>
            <h1 className="font-bold text-2xl">Products</h1>
            <section>
                <h2 className="font-semibold text-lg">All products</h2>
                <div
                    className="grid grid-flow-row gap-x-8 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.gtin || Math.random()} {...product}/>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default HomePage;
