import { getAllCategories } from "./operations/category";
import { getHeader } from "./operations/siteinfo";
import {
  getFeaturedProducts,
  getProduct,
  getAllProducts,
  getAllProductsPaths,
  getAllProductsByTag,
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
};

type API = typeof api;

export default api as API;
