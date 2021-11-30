import { GraphQLClient } from "@framework/api/graphql-client";
import { GET_CART_PREVIEW } from "@framework/utils/queries/getCartPreviewQuery";

export const useCardPreview = async () => {
  const { data, loading, error } = await GraphQLClient.query({
    query: GET_CART_PREVIEW,
  });

  return { data, loading, error };
};
