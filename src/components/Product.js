import React, { useParams, useEffect, useContext } from 'react';
import { StoreContext } from '../App';

const Product = () => {
    const { fetchProduct } = useContext(StoreContext);
    const { id } = useParams();

    useEffect(() => {
        fetchProduct(id);
    });

    return (
        <div>
            <p>Product</p>
        </div>
    );
};

export default Product;