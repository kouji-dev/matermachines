import {
  Cart as CartType,
  HcmsHeader,
  ProductCategory,
  ProductCategoryToProductConnection,
  SimpleProduct,
  VariableProduct,
  Tag as TagType,
} from "./graphql";

export interface Category extends ProductCategory {
  childs?: ProductCategory[];
}

export interface Header extends HcmsHeader {}

export interface Cart extends CartType {}

export interface FeaturedProducts extends ProductCategoryToProductConnection {}

export type Product = SimpleProduct & VariableProduct;

export interface Tag extends TagType {}
