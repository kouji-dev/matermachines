import { getAllCategories } from "./operations/category";
import { getHeader } from "./operations/siteinfo";
import { getFeaturedProducts } from "./operations/product";
import { getAllProducts } from "./operations/product";
import { getAllProductsPaths } from "./operations/product";
import { getProduct } from "./operations/product";

const api = {
  getAllCategories,
  getHeader,
  getFeaturedProducts,
  getAllProducts,
  getAllProductsPaths,
  getProduct,
};

type API = typeof api;

export default api as API;
