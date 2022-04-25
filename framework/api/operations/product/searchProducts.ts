import { FetcherError } from "@framework/utils";
import { GraphQLClient } from "@framework/api/graphql-client";
import {RootQueryToProductConnection} from "@framework/graphql";
import {SEARCH_PRODUCTS_QUERY} from "@framework/utils/queries/product/searchProductsQuery";

export const searchProducts: (q?: string | any, after?: string | null, first?: number, sortOrder?: string, field?: string ) => Promise<RootQueryToProductConnection> = async (q, after, first = 5, order, field) => {
  
  let orderBy = [];
  
  if(field && field != 'null') orderBy.push({field, order})
  
  const { data, errors } = await GraphQLClient.query({
    query: SEARCH_PRODUCTS_QUERY,
    variables: {
      q,
      first,
      after,
      orderBy
    }
  });

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  return data.products as RootQueryToProductConnection;
};
