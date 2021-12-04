import { Layout, Product } from "@components/common";
import api from "@framework/api";
import { Category, Header, Product as ProductType } from "@framework/types";
import { PageComponent, PageProps } from "@utils/common-types";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import s from "@assets/Product.module.css";

interface Props {
  pageProps: PageProps;
  product: ProductType;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const ProductPage: PageComponent<Props> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <div className={s.root}>
      <Product product={product} />
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
    },
    revalidate: 1,
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
