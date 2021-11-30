import gql from "graphql-tag";

export const GET_FEATURED_PRODUCTS_QUERY = gql`
  query featuredProducts {
    products(
      where: {
        orderby: { field: TOTAL_SALES, order: ASC }
        stockStatus: IN_STOCK
        visibility: VISIBLE
        featured: true
        status: "publish"
      }
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
