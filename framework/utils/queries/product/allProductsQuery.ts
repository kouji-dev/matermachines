import gql from "graphql-tag";

export const GET_ALL_PRODUCTS_QUERY = gql`
  query allProducts {
    products(where: { status: "publish" }) {
      nodes {
        totalSales
        name
        id
        description
        databaseId
        productTags {
          nodes {
            name
          }
        }
        image {
          altText
          sourceUrl
        }
        ... on SimpleProduct {
          id
          name
          width
          weight
          status
          stockQuantity
          stockStatus
          price(format: FORMATTED)
        }
        ... on VariableProduct {
          id
          name
          width
          weight
          status
          stockQuantity
          stockStatus
          price(format: FORMATTED)
        }
      }
    }
  }
`;
