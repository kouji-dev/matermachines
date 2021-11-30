import gql from "graphql-tag";

export const GET_CART_PREVIEW = gql`
  query getCartPreview {
    cart {
      isEmpty
      total
      contents {
        itemCount
      }
    }
  }
`;
