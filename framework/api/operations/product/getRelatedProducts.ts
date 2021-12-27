import { Product } from "@framework/types";
import { FetcherError } from "@framework/utils";
import { GET_ALL_RELATED_PRODUCTS_QUERY } from "@framework/utils/queries/product";
import { GraphQLClient } from "@framework/api/graphql-client";

export const getRelatedProducts: (
  categoriesNames: string[]
) => Promise<Product[]> = async (categoriesNames: string[]) => {
  const { data, errors } = await GraphQLClient.query({
    query: GET_ALL_RELATED_PRODUCTS_QUERY,
    variables: {
      categoriesNames: categoriesNames,
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
