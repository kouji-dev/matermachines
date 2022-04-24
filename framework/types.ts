import {
  Cart as CartType,
  HcmsHeader,
  ProductCategory,
  ProductCategoryToProductConnection,
  SimpleProduct,
  VariableProduct,
  Tag as TagType, RootQueryToProductCategoryConnection,
    Product as ProductType
} from "./graphql";

export interface Category extends ProductCategory {
  childs?: ProductCategory[];
}

export interface CategoryProducts extends RootQueryToProductCategoryConnection {

}

export interface Header extends HcmsHeader {}

export interface Cart extends CartType {}

export interface FeaturedProducts extends ProductCategoryToProductConnection {}

export type Product = (ProductType & SimpleProduct & VariableProduct) | ProductType;

export interface Tag extends TagType {}
