import { Product as ProductType } from "@framework/types";
import { FC, useCallback, useContext, useEffect } from "react";
import s from "./Products.module.css";
import Image from "next/image";
import { AddToCart } from ".";
import { AppContext } from "../AppContext";
import { useAddToCard } from "@framework/api/endpoints/cart/useAddToCart";
import { AddToCartData } from "@framework/utils/mutations/addToCartMutation";
import { Badge, Link } from "@components/ui";

interface Props {
  product: ProductType;
}

export const Product: FC<Props> = ({ product }) => {
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

  const { databaseId, name, description, image, productTags } = product;

  const tag = productTags?.nodes?.length ? productTags?.nodes[0]?.name : null;

  return (
    <div className={s.product}>
      <Badge text={tag} />
      <Link href={`product/${databaseId}`}>
        <Image
          alt={image?.altText || ""}
          src={image?.sourceUrl || ""}
          width={450}
          height={500}
          layout="responsive"
          className="cursor-pointer"
        />
      </Link>
      <div className={s.detail}>
        <span className={s.title}>{name}</span>
        <div
          title={description || ""}
          className={s.description}
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></div>
      </div>
      <AddToCart loading={loading} onClick={addToCart} price={product?.price} />
    </div>
  );
};
