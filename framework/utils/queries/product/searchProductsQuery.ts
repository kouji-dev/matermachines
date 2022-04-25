import gql from "graphql-tag";

export const SEARCH_PRODUCTS_QUERY = gql`
  query searchProducts($q: String, $first: Int, $after: String, $orderBy: [ProductsOrderbyInput]) {
  products(first: $first, after: $after, where: {search: $q, status: "publish", orderby: $orderBy}) {
    pageInfo {
      hasNextPage
      endCursor
      startCursor
    }
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
