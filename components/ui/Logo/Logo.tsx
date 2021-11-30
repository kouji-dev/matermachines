import Image from "next/image";
import logo from "@assets/logo.jpg";
import { Link } from "..";

const Logo = ({ className = "", header }) => {
  return (
    <Link href="/">
      <Image
        alt={header?.siteTitle}
        src={logo}
        layout="fixed"
        width={50}
        height={50}
      />
    </Link>
  );
};

export default Logo;
