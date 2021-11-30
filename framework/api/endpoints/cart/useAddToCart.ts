import { MutationResult, useMutation } from "@apollo/client";
import {
  AddToCartData,
  AddToCartVars,
  ADD_TO_CART_MUTATION,
} from "@framework/utils/mutations/addToCartMutation";

export const useAddToCard = () => {
  const [addToCartMutation, { data, loading, error }]: [
    any,
    MutationResult<{ addToCartMutation: AddToCartData }>
  ] = useMutation<{ addToCartMutation: AddToCartData }, AddToCartVars>(
    ADD_TO_CART_MUTATION
  );
  return [
    addToCartMutation,
    { data: data?.addToCartMutation?.addToCart?.cart, loading, error },
  ];
};
