import { WOOCOMMERCE_GRAPHQL_API } from "@framework/const";
import { Header } from "@framework/types";
import { FetcherError } from "@framework/utils";
import { getHeaderQuery } from "@framework/utils/queries/getHeaderQuery";
import fetch from "../utils/fetch";

export const getHeader: () => Promise<Header> = async () => {
  const res = await fetch(WOOCOMMERCE_GRAPHQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getHeaderQuery,
    }),
  });

  const { data, errors, status } = await res.json();

  if (errors) {
    throw new FetcherError({
      errors: errors ?? [{ message: "Failed to fetch Woocommerce API" }],
      status,
    });
  }

  return data?.getHeader as Header;
};
