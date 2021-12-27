import gql from "graphql-tag";

export const GET_ALL_RELATED_PRODUCTS_QUERY = gql`
  query allProductsByTag($categoriesNames: [String]) {
    products(
      first: 4
      where: { status: "publish", categoryIn: $categoriesNames }
    ) {
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
