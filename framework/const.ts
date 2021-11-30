if (!process.env.WOOCOMMERCE_SESSION_ID)
  throw Error("WOOCOMMERCE_SESSION_ID not found");
if (!process.env.WOOCOMMERCE_GRAPHQL_API)
  throw Error("WOOCOMMERCE_GRAPHQL_API not found");
export const WOOCOMMERCE_SESSION_ID = process.env.WOOCOMMERCE_SESSION_ID;
export const WOOCOMMERCE_GRAPHQL_API = process.env.WOOCOMMERCE_GRAPHQL_API;
