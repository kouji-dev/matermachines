import gql from "graphql-tag";

export const GET_PRODUCT_QUERY = gql`
  query getProduct($id: ID!) {
    product(id: $id, idType: DATABASE_ID) {
      totalSales
      name
      id
      description
      databaseId
      reviewCount
      averageRating
      productCategories {
        nodes {
          name
        }
      }
      productTags {
        nodes {
          name
        }
      }
      image {
        id
        altText
        sourceUrl(size: SHOP_SINGLE)
        thumbnailSourceUrl: sourceUrl(size: SHOP_CATALOG)
      }
      galleryImages {
        nodes {
          sourceUrl(size: SHOP_SINGLE)
          thumbnailSourceUrl: sourceUrl(size: SHOP_CATALOG)
          id
          altText
        }
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
