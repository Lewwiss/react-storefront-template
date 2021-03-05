import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const newState = {};

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return newState;
        return JSON.stringify(serializedState);
    } catch(e) {
        console.log(e);
        return newState;
    };
};

function saveToLocalStorage(state) {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
  } catch(e) {
      console.log(e);
  };
};

function reducer(state = newState, action) {
  switch(action.type) {
    case "UPDATE_CHECKOUT":
      return {checkout: action.data};
    default:
      return loadFromLocalStorage();
  };
};

const store = createStore(reducer);
store.subscribe(() => saveToLocalStorage(store.getState()));
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
