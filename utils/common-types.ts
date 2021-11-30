import { Category, Header, Product } from "@framework/types";
import { FC, ReactNode } from "react";

export interface PageProps {
  categories: Category[];
  header: Header;
  products?: Product[];
}

export interface PageComponent<T> extends FC<T> {
  Layout?: ReactNode;
}
