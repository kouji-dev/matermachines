import { getAllCategories } from "./operations/category";
import { getHeader } from "./operations/siteinfo";
import {
  getFeaturedProducts,
  getProduct,
  getAllProducts,
  getAllProductsPaths,
  getAllProductsByTag,
  getRelatedProducts,
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
};

type API = typeof api;

export default api as API;
