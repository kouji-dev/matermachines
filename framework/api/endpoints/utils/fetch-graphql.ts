import { GraphQLClient } from "@framework/api/graphql-client";

export type Mapper<T> = (dt: any) => T;
const NoopMapper: Mapper<any> = (dt: any) => dt;

export const graphQLFetcher =
  <T>(mapper: Mapper<T> = NoopMapper) =>
  (query: string, variables: Partial<any> = {}) => {};
