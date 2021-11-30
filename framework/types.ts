import {
  Cart as CartType,
  HcmsHeader,
  ProductCategory,
  ProductCategoryToProductConnection,
  SimpleProduct,
  VariableProduct,
} from "./graphql";

export interface Category extends ProductCategory {
  childs?: ProductCategory[];
}

export interface Header extends HcmsHeader {}

export interface Cart extends CartType {}

export interface FeaturedProducts extends ProductCategoryToProductConnection {}

export type Product = SimpleProduct & VariableProduct;
