# React / Shopify Storefront

An application that uses the [Shopify Buy SDK](https://shopify.github.io/js-buy-sdk/). Allows users to create a separate PWA and use Shopify as a headless CMS.

## Setup

Details can be generated in the shopify admin dashboard, under private apps

_(Also make sure all products are available to the private apps sales channel)_
```JS
  const client = Client.buildClient({
    storefrontAccessToken: "30ae12514dc814139477018c12d29947",
    domain: "react-storefront-template.myshopify.com"
  });
```

## Installed Packages

* [React](https://reactjs.org/)
* [Redux / React-Redux](https://react-redux.js.org/introduction/getting-started)
* [React Router](https://reactrouter.com/web/guides/quick-start)
* [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)
* [Shopify JS Buy](https://shopify.github.io/js-buy-sdk/)

## Getting started

This project uses [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app), so scripts use craco instead of react-scripts.

1. Install's all app dependencies.
```sh
  npm install
```

2. Runs the app locally in development mode.
```sh
  npm run start
```

3. Create's a production ready version of the app.
```sh
  npm run build
```
