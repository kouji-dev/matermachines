import { WOOCOMMERCE_GRAPHQL_API } from "@framework/const";
import { request } from "graphql-request";

const fetcher = (api: string) => (query: string) => request(api, query);

export default fetcher(WOOCOMMERCE_GRAPHQL_API);
