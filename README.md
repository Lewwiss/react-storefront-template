# React / Shopify Storefront

An application that uses the Shopify Buy SDK. Allow's users to create a React storefront while still using Shopify basic plan.

### Setup

Details can be generated in the shopify admin dashboard, under private apps
(Also make sure all products are available to the private apps sales channel)
```JS
  const client = Client.buildClient({
    storefrontAccessToken: "30ae12514dc814139477018c12d29947",
    domain: "react-storefront-template.myshopify.com"
  });
```
