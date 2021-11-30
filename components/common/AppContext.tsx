import { GraphQLClient } from "@framework/api/graphql-client";
import { Cart } from "@framework/types";
import { GET_CART_PREVIEW } from "@framework/utils/queries/getCartPreviewQuery";
import React, { useState, useEffect, FC, Dispatch } from "react";

interface AppContextType {
  cart?: Cart;
  loading: boolean;
  setCart: Dispatch<Cart>;
}

const InitialContext: AppContextType = {
  cart: undefined,
  loading: false,
  setCart: (c) => {},
};

export const AppContext = React.createContext<AppContextType>(InitialContext);

export const AppProvider: FC<{}> = ({ children }) => {
  const [cart, mutateCart] = useState<Cart | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const setCart = (cart: Cart) => {
    mutateCart(cart);
  };

  const getInitialCart = async () => {
    const { data, loading: l } = await GraphQLClient.query({
      query: GET_CART_PREVIEW,
    });

    setCart(data?.cart);
    setLoading(l);
  };

  useEffect(() => {
    // @TODO Will add option to show the cart with localStorage later.
    if (process.browser) {
      getInitialCart();
    }
  }, []);

  return (
    <AppContext.Provider value={{ cart, loading, setCart }}>
      {children}
    </AppContext.Provider>
  );
};
