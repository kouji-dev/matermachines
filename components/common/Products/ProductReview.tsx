import { Rating } from "@components/ui";
import { useAddReview } from "@framework/api/endpoints/product/useAddReview";
import { Product } from "@framework/types";
import { AddReviewVars } from "@framework/utils/mutations/addReviewMutation";
import { FC, useCallback, useState } from "react";

interface Props {
  product?: Product;
}

export const ProductReview: FC<Props> = ({ product }) => {
  const [addReviewMutation, { loading, error }] = useAddReview();
  //get user from context otherwise the user should log in
  const [user] = useState(null);
  const onRate = useCallback(
    (rating) => {
      if (!product || loading || user == null) return;
      const vars: AddReviewVars = {
        commentOn: product?.databaseId,
        rating,
        author: user,
      };
      addReviewMutation({
        variables: vars,
      });
    },
    [addReviewMutation, product, loading, user]
  );
  return <Rating value={product?.averageRating || 0} onRate={onRate} />;
};
