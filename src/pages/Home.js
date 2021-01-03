import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    const { fetchProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchProducts();
    });

    if (!products) {
        return (<div>Loading...</div>);
    };

    return (
        <React.Fragment>
            <Container>
                <Grid container>
                    {products.map(product => (
                        <Grid item xs={12} sm={6} md={6} lg={3} key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <Link to={`/product/${product.id}`}>
                                Link
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;