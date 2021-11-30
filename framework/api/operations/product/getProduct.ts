import { Product } from "@framework/types";
import { FetcherError } from "@framework/utils";
import { GET_PRODUCT_QUERY } from "@framework/utils/queries/product";
import { GraphQLClient } from "@framework/api/graphql-client";

export const getProduct: (id: string) => Promise<Product> = async (id) => {
  const { data, errors } = await GraphQLClient.query({
    query: GET_PRODUCT_QUERY,
    variables: {
      id,
    },
  });

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  return data.product as Product;
};
