import { Cart } from "@framework/types";
import gql from "graphql-tag";

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($productId: Int!, $quantity: Int!) {
    addToCart(input: { productId: $productId, quantity: $quantity }) {
      cart {
        isEmpty
        total
        contents {
          itemCount
        }
      }
    }
  }
`;

export interface AddToCartData {
  addToCart: {
    cart: Cart;
  };
}

export interface AddToCartVars {
  productId: number;
  quantity: number;
}
