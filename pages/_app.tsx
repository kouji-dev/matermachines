import { FC, useEffect } from "react";
import type { AppProps } from "next/app";
import "@assets/main.css";
import { ApolloProvider } from "@apollo/client";
import { GraphQLClient } from "@framework/api/graphql-client";
import { AppProvider } from "@components/common/AppContext";
// import { Head } from "@components/common";
// import { ManagedUIContext } from "@components/ui/context";

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps: props }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
      {/* <Head /> */}
      <ApolloProvider client={GraphQLClient}>
        <AppProvider>
          <Layout pageProps={props?.pageProps}>
            <Component {...props} />
          </Layout>
        </AppProvider>
      </ApolloProvider>
    </>
  );
}
