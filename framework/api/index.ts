import { getAllCategories } from "./operations/category";
import { getHeader } from "./operations/siteinfo";
import {
  getFeaturedProducts,
  getProduct,
  getAllProducts,
  getAllProductsPaths,
  getAllProductsByTag,
  getRelatedProducts,
  getGroupedProductsByCategory,
  searchProducts
} from "./operations/product";
import { getAllTags } from "./operations/tag";

const api = {
  getAllCategories,
  getHeader,
  getFeaturedProducts,
  getAllProducts,
  getAllProductsPaths,
  getProduct,
  getAllTags,
  getAllProductsByTag,
  getRelatedProducts,
  getGroupedProductsByCategory,
  searchProducts
};

type API = typeof api;

export default api as API;
