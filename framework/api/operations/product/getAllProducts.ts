import { Product } from "@framework/types";
import { FetcherError } from "@framework/utils";
import { GET_ALL_PRODUCTS_QUERY } from "@framework/utils/queries/product";
import { GraphQLClient } from "@framework/api/graphql-client";

export const getAllProducts: () => Promise<Product[]> = async () => {
  const { data, errors } = await GraphQLClient.query({
    query: GET_ALL_PRODUCTS_QUERY,
  });

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  return data.products.nodes as Product[];
};
