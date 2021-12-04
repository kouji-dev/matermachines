import { Category } from "@framework/types";
import { FetcherError } from "@framework/utils";
import { GET_ALL_CATEGORIES_QUERY } from "@framework/utils/queries/category";
import { GraphQLClient } from "@framework/api/graphql-client";

export const getAllCategories: () => Promise<Category[]> = async () => {
  const { data, errors } = await GraphQLClient.query({
    query: GET_ALL_CATEGORIES_QUERY,
  });

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  const result = processCategories(data.productCategories.nodes as Category[]);

  return result;
};

const processCategories = (categories: Category[]) =>
  categories.filter(
    ({ name, children }) => name != "Uncategorized" && children?.nodes?.length
  );
