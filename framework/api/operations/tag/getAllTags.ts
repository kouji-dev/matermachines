import { Tag } from "@framework/types";
import { FetcherError } from "@framework/utils";
import { GET_ALL_TAGS_QUERY } from "@framework/utils/queries/tag";
import { GraphQLClient } from "@framework/api/graphql-client";

export const getAllTags: () => Promise<Tag[]> = async () => {
  const { data, errors } = await GraphQLClient.query({
    query: GET_ALL_TAGS_QUERY,
  });

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  return data?.tags?.nodes as Tag[];
};
