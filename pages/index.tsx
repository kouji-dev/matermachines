import { Layout } from "@components/common";
import api from "@framework/api";
import { Category, Header, Product } from "@framework/types";
import { PageComponent, PageProps } from "@utils/common-types";
import { GetStaticProps, GetStaticPropsContext } from "next";
import s from "@assets/Home.module.css";
import { Products } from "@components/common/Products";
import { Link } from "@components/ui";

interface Props {
  pageProps: PageProps;
}

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const header: Header = await api.getHeader();
  const categories: Category[] = await api.getAllCategories();
  const products: Product[] = await api.getFeaturedProducts();

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

const Home: PageComponent<Props> = ({ pageProps: { products } }) => {
  return (
    <div className={s.root}>
      <div className={s.title}>
        <h2 className={s.heading}>Featured Products</h2>
        <Link href="product">
          <span className={s.link}>See All</span>
        </Link>
      </div>
      <Products products={products || []} />
    </div>
  );
};

Home.Layout = Layout;

export default Home;
