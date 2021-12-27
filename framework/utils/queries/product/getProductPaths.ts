import gql from "graphql-tag";

export const GET_PRODUCTS_PATHS_QUERY = gql`
  query getAllProductsPaths {
    products(first: 100, where: { status: "publish" }) {
      nodes {
        databaseId
      }
    }
  }
`;

// products(where: { status: "publish" }) {
//   nodes {
//     databaseId
//   }
// }
