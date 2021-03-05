import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../App';

const Product = () => {
    const { fetchProducts } = useContext(StoreContext);

    useEffect(() => {
        fetchProducts();
    });

    return (
        <div>
            <p>Products</p>
        </div>
    );
};

export default Product;