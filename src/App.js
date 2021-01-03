import React, { Component } from 'react';
import Client from 'shopify-buy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Cart from './components/Cart';

import Home from './pages/Home';
import Product from './pages/Product';

const ShopContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: '',
  domain: ''
});

class App extends Component {
  
  state = {
    products: [],
    product: {},
    checkout: { lineItems: [] },
    isCartOpen: false
  };

  componentDidMount() {
    this.createCheckout();
  };

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    this.setState({checkout: checkout});
  };

  addCart = async (variantId, quantity) => {
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
    const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
    this.setState({checkout: checkout, isCartOpen: true});
  };

  removeCart = async (lineItemId) => {
    const checkout = await client.checkout.removeLineItems(this.state.checkout.id, [lineItemId]);
    this.setState({checkout: checkout});
  };

  quantityCart = async (lineItemId, quantity) => {
    const lineItemUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];
    const checkout = await client.checkout.updateLineItem(this.state.checkout.id, lineItemUpdate);
    this.setState({checkout: checkout});
  };

  fetchProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({products: products});
  };

  fetchProduct = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({product: product});
  };

  openCart = () => { this.setState({isCartOpen: true}); };
  closeCart = () => { this.setState({isCartOpen: false}); };

  render() {
    return (
      <ShopContext.Provider value={{...this.state,
        createCheckout: this.createCheckout,
        addCart: this.addCart,
        removeCart: this.removeCart,
        quantityCart: this.quantityCart,
        fetchProducts: this.fetchProducts,
        fetchProduct: this.fetchProduct,
        openCart: this.openCart,
        closeCart: this.closeCart}}>
        <Navigation />
        <Cart />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </ShopContext.Provider>
    );
  };
};

export { ShopContext };
export default App;
