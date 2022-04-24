import {Category} from "@framework/types";
import { FetcherError } from "@framework/utils";
import { GET_GROUPED_PRODUCTS_BY_CATEGORY } from "@framework/utils/queries/product";
import { GraphQLClient } from "@framework/api/graphql-client";

export const getGroupedProductsByCategory: () => Promise<Category[]> = async () => {
  const { data, errors } = await GraphQLClient.query({
    query: GET_GROUPED_PRODUCTS_BY_CATEGORY,
  });

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  return data.productCategories.nodes as Category[];
};
