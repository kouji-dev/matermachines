import { Layout, Products } from "@components/common";
import api from "@framework/api";
import { Category, Header, Product, Tag } from "@framework/types";
import { PageComponent, PageProps } from "@utils/common-types";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  pageProps: PageProps;
}

interface Params extends ParsedUrlQuery {
  tag: string;
}

const DealPage: PageComponent<Props> = ({ pageProps: { products } }) => {
  console.log(products);

  if (!products?.length) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-xl text-center">
          <p>No products found</p>
          <p>
            Please try the other <span className="font-bold">Deals</span>
          </p>
        </div>
      </div>
    );
  }
  return <Products products={products} />;
};

DealPage.Layout = Layout;

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context: GetStaticPropsContext<Params>
) => {
  const tag = context.params?.tag || "";

  const header: Header = await api.getHeader();
  const categories: Category[] = await api.getAllCategories();
  const products: Product[] = await api.getAllProductsByTag(tag);

  return {
    props: {
      pageProps: {
        categories,
        header,
        products,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const tags: Tag[] = await api.getAllTags();

  const paths = tags.map((tag: Tag) => ({
    params: {
      tag: (tag.name as string).toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default DealPage;
