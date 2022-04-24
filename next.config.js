/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WOOCOMMERCE_IMAGE_DOMAIN , "api.goodbeysr.com"],
  },
  env: {
    WOOCOMMERCE_GRAPHQL_API: process.env.WOOCOMMERCE_GRAPHQL_API,
    WOOCOMMERCE_SESSION_ID: process.env.WOOCOMMERCE_SESSION_ID,
  },
};
