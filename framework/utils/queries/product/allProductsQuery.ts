import gql from "graphql-tag";

export const GET_ALL_PRODUCTS_QUERY = gql`
  query allProducts {
    products(first: 100, where: { status: "publish" }) {
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
          sourceUrl(size: SHOP_CATALOG)
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
