/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1"],
  },
  env: {
    WOOCOMMERCE_GRAPHQL_API: process.env.WOOCOMMERCE_GRAPHQL_API,
    WOOCOMMERCE_SESSION_ID: process.env.WOOCOMMERCE_SESSION_ID,
  },
};
