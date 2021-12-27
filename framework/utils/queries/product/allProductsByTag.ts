import gql from "graphql-tag";

export const GET_ALL_PRODUCTS_BY_TAG_QUERY = gql`
  query allProductsByTag($tag: [String]) {
    products(where: { status: "publish", tagIn: $tag }) {
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
