import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../App';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { fetchProducts, data } = useContext(StoreContext);

    useEffect(() => {
        fetchProducts();
    });

    return (
        <div className="container mx-auto pb-10 pt-2">
            <div className="grid grid-cols-1 pb-10 py-14 px-3 mx-6 flex">
                <div className="flex justify-center align-center">
                    <p className="text-4xl font-medium text-gray-900">All Products</p>
                </div>
                <div className="flex justify-center align-center">
                    {data ?
                        <p className="text-md text-gray-600 pt-4">Showing {data.length} Products</p>
                        : null
                    }
                </div>  
            </div>
            {data ?
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
                {data.map((element) => {
                return (
                    <Link key={element.id} className="m-4">
                        <img src={element.variants[0].image.src} alt={element.variants[0].image.id} width="100%" />
                        <div className="pt-4 text-center">
                            <p className="text-sm text-gray-600">{element.title}</p>
                            <p className="text-2xl pt-2 font-medium">£{element.variants[0].price}</p>
                        </div>
                    </Link>
                );
                })}
            </div>
            : null}
        </div>
    );
};

export default ProductList;