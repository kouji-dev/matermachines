import { Button } from "@components/ui";
import { Maybe } from "@framework/graphql";
import { FC } from "react";
import s from "./Products.module.css";

interface Props {
  loading: boolean;
  price?: Maybe<string>;
  onClick: () => void;
}

export const AddToCart: FC<Props> = ({ loading, price, onClick }) => {
  return (
    <div className={s.addToCart}>
      <Button variant="slim" loading={loading} onClick={onClick}>
        {price ? (
          <span dangerouslySetInnerHTML={{ __html: price }} />
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};
