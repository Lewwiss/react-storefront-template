import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../App';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Product = () => {
    const { fetchProduct, product, addCart } = useContext(ShopContext);
    let { id } = useParams();

    useEffect(() => {
        fetchProduct(id);
    });

    if (!product.title) {
        return (<div>Loading...</div>);
    };

    return (
        <React.Fragment>
            <Container>
                {product.title}
                {product.description}
                <Button variant="contained" color="primary" onClick={() => {addCart(product.variants[0].id, 1)}}>Add to cart</Button>
            </Container>
        </React.Fragment>
    );
};

export default Product;