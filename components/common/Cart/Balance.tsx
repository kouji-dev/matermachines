import { Link, Loading } from "@components/ui";
import { FC, useContext } from "react";
import { AppContext } from "../AppContext";

interface BalanceProps {}

export const Balance: FC<BalanceProps> = () => {
  const { cart, loading } = useContext(AppContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-8">
      <Link href="cart">
        <span className="capitalize text-xs font-medium text-gray-400 align-baseline">
          your cart
        </span>
        <br />
        <span
          className="capitalize text-base font-extrabold text-black"
          dangerouslySetInnerHTML={{ __html: cart?.total || "" }}
        ></span>
      </Link>
    </div>
  );
};
