import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../App';

const Product = () => {
    const { fetchProducts, data } = useContext(StoreContext);

    useEffect(() => {
        fetchProducts();
    });

    return (
        <div>
            <p>Products</p>
            {data ?
            <div className="grid grid-cols-2 md:grid-cols-4">
                {data.map((element) => {
                return (
                    <div key={element.id}>
                        <img src={element.variants[0].image.src} alt={element.variants[0].image.id} />
                        <p>{element.title}</p>
                        <p>{element.variants[0].price}</p>
                    </div>
                );
                })}
            </div>
            : null}
            {data ? <p>yes</p>: <p>no</p>}
        </div>
    );
};

export default Product;