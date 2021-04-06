import React from 'react';
import Navigation from '../components/Navigation';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Navigation />
            <ProductList />
            <Footer />
        </React.Fragment>
    );
};

export default Home;