import { Product as ProductType } from "@framework/types";
import { FC } from "react";
import { Product } from "./Product";
import s from "./Products.module.css";

interface Props {
  products: ProductType[];
}

export const Products: FC<Props> = ({ products }) => {
  return (
    <div className={s.products}>
      {products?.map((product) => (
        <Product product={product} key={product?.id} />
      ))}
    </div>
  );
};
