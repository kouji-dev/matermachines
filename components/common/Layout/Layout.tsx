import cn from "classnames";
import React, { FC } from "react";

import s from "./Layout.module.css";
import { Navbar } from "../Navbar";
import { PageProps } from "@utils/common-types";

interface Props {
  pageProps: PageProps;
}

export const Layout: FC<Props> = ({ children, pageProps }) => {
  return (
    <div className={cn(s.root)}>
      <Navbar categories={pageProps?.categories} header={pageProps?.header} />
      <main className={s.body}>{children}</main>
    </div>
  );
};
