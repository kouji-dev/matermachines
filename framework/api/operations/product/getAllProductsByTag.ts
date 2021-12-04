import { Product } from "@framework/types";
import { FetcherError } from "@framework/utils";
import { GET_ALL_PRODUCTS_BY_TAG_QUERY } from "@framework/utils/queries/product";
import { GraphQLClient } from "@framework/api/graphql-client";

export const getAllProductsByTag: (tag: string) => Promise<Product[]> = async (
  tag: string
) => {
  const { data, errors } = await GraphQLClient.query({
    query: GET_ALL_PRODUCTS_BY_TAG_QUERY,
    variables: {
      tag: [tag],
    },
  });

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  return data.products.nodes as Product[];
};
