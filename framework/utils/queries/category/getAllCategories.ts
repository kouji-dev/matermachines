import gql from "graphql-tag";

export const GET_ALL_CATEGORIES_QUERY = gql`
  query allCategories {
    productCategories {
      nodes {
        id
        name
        slug
        parentId
        description
        children {
          nodes {
            id
            name
            slug
            description
          }
        }
      }
    }
  }
`;
