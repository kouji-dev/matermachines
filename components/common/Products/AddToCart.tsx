import { Button } from "@components/ui";
import { Variant } from "@components/ui/Button";
import { useAddToCard } from "@framework/api/endpoints/cart/useAddToCart";
import { Product } from "@framework/types";
import { AddToCartData } from "@framework/utils/mutations/addToCartMutation";
import { FC, useCallback, useContext } from "react";
import { AppContext } from "../AppContext";
import s from "./Products.module.css";

interface Props {
  product?: Product;
  block?: boolean;
  variant?: Variant;
}

export const AddToCart: FC<Props> = ({ product, block, variant = "slim" }) => {
  const { setCart } = useContext(AppContext);
  const [addToCartMutation, { loading }] = useAddToCard();

  const addToCart = useCallback(() => {
    const vars = {
      productId: product?.databaseId,
      quantity: 1,
    };
    addToCartMutation({
      variables: vars,
      onCompleted: (data: AddToCartData) => {
        setCart(data?.addToCart.cart);
      },
    });
  }, [setCart, addToCartMutation, product]);
  return (
    <div className={s.addToCart}>
      <Button
        variant={variant}
        block={block}
        loading={loading}
        onClick={addToCart}
      >
        {product?.price ? (
          <span dangerouslySetInnerHTML={{ __html: product?.price }} />
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};
