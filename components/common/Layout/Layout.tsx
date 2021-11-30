import cn from "classnames";
import React, { FC } from "react";

import s from "./Layout.module.css";
import { Navbar } from "../Navbar";
import { PageProps } from "@utils/common-types";

interface Props {
  pageProps: PageProps;
}

export const Layout: FC<Props> = ({
  children,
  pageProps: { categories, header },
}) => {
  return (
    <div className={cn(s.root)}>
      <Navbar categories={categories} header={header} />
      <main className="fit">{children}</main>
    </div>
  );
};
