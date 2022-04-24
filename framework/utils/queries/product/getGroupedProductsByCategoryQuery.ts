import gql from "graphql-tag";

export const GET_GROUPED_PRODUCTS_BY_CATEGORY = gql`
  query groupedProductsByCategory {
    productCategories {
        nodes {
          name
          slug
          products(first: 4, where: { status: "publish", orderby: {field: TOTAL_SALES} }) {
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
    }
  }
`;
