import { Layout } from "@components/common";
import api from "@framework/api";
import { Category, Header } from "@framework/types";
import { PageProps } from "@utils/common-types";
import { GetStaticProps, GetStaticPropsContext } from "next";

interface Props {
  pageProps: PageProps;
}

export default function Wishlist() {
  return <div>Wishlist</div>;
}

Wishlist.Layout = Layout;

export const getStaticProps: GetStaticProps<Props, {}> = async (
  context: GetStaticPropsContext
) => {
  const header: Header = await api.getHeader();
  const categories: Category[] = await api.getAllCategories();
  //TODO: recommended products
  //   const products: Product[] = await api.getAllProducts();

  return {
    props: {
      pageProps: {
        header,
        categories,
        products: null,
      },
    },
  };
};
