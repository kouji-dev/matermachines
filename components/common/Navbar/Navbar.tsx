import { Badge, Container, Logo, Link } from "@components/ui";
import { HeartIcon } from "@heroicons/react/outline";
import { PageProps } from "@utils/common-types";
import {FC, useEffect, useLayoutEffect, useState} from "react";
import { Balance, CartIcon } from "../Cart";
import { SearchBar } from "../Search";
import s from "./Navbar.module.css";
import NavbarRoot from "./NavbarRoot";
import { SubNav } from "./Subnav";
import {Fade} from "@components/ui/Fade";

interface Props extends PageProps {}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Mobile|Opera Mini/i.test(navigator.userAgent) ) {
      setIsMobile(true);
    }
  }, [])

  return isMobile;
}

export const Navbar: FC<Props> = ({ categories = [], header }) => {
  const isMobile = useIsMobile();

  return (
    <NavbarRoot>
      <Container>
        <Fade>
          <div className="py-2 bg-blue-900 text-center text-white font-black">
            Special offer for any first Buy
          </div>
        </Fade>
        <div className={s.navContainer}>
          <Logo header={header} className="mr-2" />
          <SearchBar />
          <div className={s.toolbar}>
            {/*<WishlistIcon count={3} />*/}
            <CartIcon />
            {!isMobile && <Balance /> }
            {/*<div className="w-10 h-10 bg-purple-300 rounded-full hover:ring-2 hover:shadow-md">*/}
            {/*  U*/}
            {/*</div>*/}
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
    <Link href="/wishlist">
      <span className="relative inline-block">
        <HeartIcon className="h-6 w-6 transform hover:scale-110" />
        <Badge text={count} />
      </span>
    </Link>
  );
};
