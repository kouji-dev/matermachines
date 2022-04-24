import { Layout } from "@components/common";
import api from "@framework/api";
import {Category, Header} from "@framework/types";
import { PageComponent, PageProps } from "@utils/common-types";
import { GetStaticProps, GetStaticPropsContext } from "next";
import {ProductsByCategory} from "@components/common/Products";

interface Props {
  pageProps: PageProps;
}

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const header: Header = await api.getHeader();
  const categories: Category[] = await api.getGroupedProductsByCategory();

  return {
    props: {
      pageProps: {
        header,
        categories: categories || [],
      },
    },
    revalidate: true,
  };
};

const Home: PageComponent<Props> = ({ pageProps: { categories } }) => {
  return (
    <div>
      {
        categories?.map(category => <ProductsByCategory key={category.name} label={category.name} slug={category.slug} products={category.products?.nodes || []}/>)
      }
    </div>
  );
};

Home.Layout = Layout;

export default Home;
