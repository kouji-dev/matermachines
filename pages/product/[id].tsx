import { Layout } from "@components/common";
import api from "@framework/api";
import { Category, Header, Product as ProductType } from "@framework/types";
import { PageComponent, PageProps } from "@utils/common-types";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import s from "@assets/Product.module.css";
import { ProductDetail } from "@components/common/Products";

interface Props {
  pageProps: PageProps;
  product: ProductType;
  relatedProducts: ProductType[];
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const ProductPage: PageComponent<Props> = ({ product, relatedProducts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <div className={s.root}>
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </div>
  );
};

ProductPage.displayName = "ProductPage";

ProductPage.Layout = Layout;

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context: GetStaticPropsContext<Params>
) => {
  const id = context.params?.id as string;

  const header: Header = await api.getHeader();
  const categories: Category[] = await api.getAllCategories();
  const product: ProductType = await api.getProduct(id);
  const relatedCategories = product?.productCategories?.nodes?.map(
    (category) => category?.name as string
  ) as string[];
  const relatedProducts: ProductType[] = await api.getRelatedProducts(
    relatedCategories
  );
  //TODO: recommended products
  //   const products: Product[] = await api.getAllProducts();

  return {
    props: {
      pageProps: {
        header,
        categories,
        products: [],
      },
      product,
      relatedProducts,
    }
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const ids = await api.getAllProductsPaths();

  const paths = ids?.map((id) => ({
    params: { id: id + "" },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProductPage;
