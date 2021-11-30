import { Category, Header, Product } from "@framework/types";
import { FC, ReactNode } from "react";

export interface PageProps {
  categories: Category[] | null;
  header: Header | null;
  products?: Product[] | null;
}

export interface PageComponent<T> extends FC<T> {
  Layout?: ReactNode;
}
