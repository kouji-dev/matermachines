import gql from "graphql-tag";

export const GET_PRODUCT_QUERY = gql`
  query getProduct($id: ID!) {
    product(id: $id, idType: DATABASE_ID) {
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
`;
