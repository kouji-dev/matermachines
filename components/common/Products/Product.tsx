import {Maybe, } from "@framework/graphql";
import { Product as ProductType} from "@framework/types";
import {FC} from "react";
import s from "./Products.module.css";
import Image from "next/image";
import {AddToCart} from ".";
import {Badge, Link} from "@components/ui";

interface Props {
    product?: Maybe<ProductType>;
}

export const Product: FC<Props> = ({product}) => {
    if (!product) return (<div>Empty Product</div>);

    const {databaseId, name, description, image, productTags} = product;

    const tag = productTags?.nodes?.length ? productTags?.nodes[0]?.name : null;

    return (
        <div className={s.product}>
            <Badge text={tag}/>
            <Link href={`/product/${databaseId}`}>
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
                    dangerouslySetInnerHTML={{__html: description || ""}}
                />
            </div>
            <AddToCart product={product}/>
        </div>
    );
};
