import { Badge, Container, Logo, Link } from "@components/ui";
import { HeartIcon } from "@heroicons/react/outline";
import { PageProps } from "@utils/common-types";
import { FC } from "react";
import { Balance, CartIcon } from "../Cart";
import { Search } from "../Search";
import s from "./Navbar.module.css";
import NavbarRoot from "./NavbarRoot";
import { SubNav } from "./Subnav";

interface Props extends PageProps {}

export const Navbar: FC<Props> = ({ categories = [], header }) => {
  return (
    <NavbarRoot>
      <Container>
        <div className={s.navContainer}>
          <div className="flex items-center flex-auto">
            <Logo header={header} />
            <Search categories={categories} />
          </div>
          <div className={s.toolbar}>
            <WishlistIcon count={3} />
            <CartIcon />
            <Balance />
            <div className="w-10 h-10 bg-purple-300 rounded-full hover:ring-2 hover:shadow-md"></div>
          </div>
        </div>
        <SubNav />
      </Container>
    </NavbarRoot>
  );
};

interface WishlistIconProps {
  count: number;
}

const WishlistIcon: FC<WishlistIconProps> = ({ count }) => {
  return (
    <Link href="wishlist">
      <span className="relative inline-block">
        <HeartIcon className="h-6 w-6 transform hover:scale-110" />
        <Badge text={count} />
      </span>
    </Link>
  );
};
