import {FC} from "react";
import {Maybe} from "@framework/graphql";
import { Product } from "@framework/types";
import {Label} from "@components/common/Category/Label";
import {Products} from "@components/common";
interface Props {
    slug?: Maybe<string>;
    label?: Maybe<string>;
    products?: Maybe<Product>[];
}

export const ProductsByCategory: FC<Props> = ({slug,label, products}) => {

    if(!products?.length) return null;

    return (
        <div className="mb-14">
            <Label label={label || ""} href={`category/${slug}`}/>
            <Products products={products}/>
        </div>
    )
}