import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Client from 'shopify-buy';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import Cart from './components/Cart';

const StoreContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: "30ae12514dc814139477018c12d29947",
  domain: "react-storefront-template.myshopify.com"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      cart: false
    };
  };

  // Create new checkout + update checkout
  createCheckout = async () => {
    const checkout = await client.checkout.create();
    this.props.dispatch({type: "UPDATE_CHECKOUT", data: checkout});
  };

  // Add item to cart + update checkout
  addCart = async (variantId, quantity) => {
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
    const checkout = await client.checkout.addLineItems(this.props.checkout.id, lineItemsToAdd);
    this.props.dispatch({type: "UPDATE_CHECKOUT", data: checkout});
  };

  // Remove item from cart + update checkout
  removeCart = async (lineItemId) => {
    const checkout = await client.checkout.removeLineItems(this.props.checkout.id, [lineItemId]);
    this.props.dispatch({type: "UPDATE_CHECKOUT", data: checkout});
  };

  // Update quantities + update checkout
  updateCart = async (lineItemId, quantity) => {
    const lineItemUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];
    const checkout = await client.checkout.updateLineItems(this.props.checkout.id, lineItemUpdate);
    this.props.dispatch({type: "UPDATE_CHECKOUT", data: checkout});
  };

  // Fetch all products
  fetchProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({data: products});
  };

  // Fetch certain product by ID
  fetchProduct = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({data: product});
  };

  render() {
    return (
      <StoreContext.Provider value={{
        createCheckout: this.createCheckout,
        addCart: this.addCart,
        removeCart: this.removeCart,
        updateCart: this.updateCart,
        fetchProducts: this.fetchProducts,
        fetchProduct: this.fetchProduct,
        data: this.state.data,
        cart: this.state.cart
      }}>
        <Navigation />
        {this.state.cart ? <Cart /> : null}
        <Router>
          <Switch>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/">
              <Products />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </StoreContext.Provider>
    );
  };
};

const mapStateToProps = (state) => ({
  checkout: state.checkout
});

export { StoreContext };
export default connect(mapStateToProps)(App);
