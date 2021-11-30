import { WOOCOMMERCE_COOKIE_ID } from "./const";
import fetcher from "./fetcher";

export const wooCommerceProvider = {
  locale: "ar",
  cartCookie: WOOCOMMERCE_COOKIE_ID,
  //   cart: {
  //     useCart,
  //     useAddItem,
  //   },
  //   products: { useSearch },
  //   auth: { useLogin, useLogout, useSignup },
  fetcher,
};
