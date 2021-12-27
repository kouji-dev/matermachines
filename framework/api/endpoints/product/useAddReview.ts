import { MutationResult, useMutation } from "@apollo/client";
import {
  AddReviewData,
  AddReviewVars,
  ADD_REVIEW_MUTATION,
} from "@framework/utils/mutations/addReviewMutation";

export const useAddReview = () => {
  const [addReviewMutation, { data, loading, error }]: [
    any,
    MutationResult<{ addToCartMutation: AddReviewData }>
  ] = useMutation<{ addToCartMutation: AddReviewData }, AddReviewVars>(
    ADD_REVIEW_MUTATION
  );
  return [
    addReviewMutation,
    { data: data?.addToCartMutation?.writeReview, loading, error },
  ];
};
