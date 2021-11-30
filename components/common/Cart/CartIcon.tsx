import { Badge, Link } from "@components/ui";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { FC, useContext } from "react";
import { AppContext } from "../AppContext";

interface CartIconProps {}

export const CartIcon: FC<CartIconProps> = () => {
  const { cart } = useContext(AppContext);
  return (
    <Link href="cart">
      <span className="relative inline-block">
        <ShoppingBagIcon className="h-6 w-6 transform hover:scale-110" />
        <Badge text={cart?.contents?.itemCount} />
      </span>
    </Link>
  );
};
