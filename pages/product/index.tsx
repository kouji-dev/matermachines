import { Layout } from "@components/common";
import {Products, ProductsLazy} from "@components/common/Products";
import api from "@framework/api";
import { Category, Header, Product } from "@framework/types";
import { PageComponent, PageProps } from "@utils/common-types";
import { GetStaticProps, GetStaticPropsContext } from "next";
import {useState} from "react";

interface Props {
  pageProps: PageProps;
}

const ProductsPage: PageComponent<Props> = ({ pageProps: { products } }) => {
  const [pagination, setPagination] = useState({first: 0, last: 10})

  return <ProductsLazy {...pagination}/>;
};

ProductsPage.Layout = Layout;

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const header: Header = await api.getHeader();
  const categories: Category[] = await api.getAllCategories();
  const products: Product[] = await api.getAllProducts();

  return {
    props: {
      pageProps: {
        header,
        categories,
        products,
      },
    },
    revalidate: true,
  };
};

export default ProductsPage;
