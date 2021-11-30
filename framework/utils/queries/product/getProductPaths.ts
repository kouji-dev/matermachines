import gql from "graphql-tag";

export const GET_PRODUCTS_PATHS_QUERY = gql`
  query getAllProductsPaths {
    products(where: { status: "publish" }) {
      nodes {
        databaseId
      }
    }
  }
`;
