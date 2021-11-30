import Image from "next/image";
import logo from "@assets/logo.jpg";
import { Link } from "..";
import { FC } from "react";
import { Header } from "@framework/types";

interface Props {
  header: Header | null;
  className?: string;
}

const Logo: FC<Props> = ({ className = "", header }) => {
  return (
    <Link href="/">
      <Image
        alt={header?.siteTitle || ""}
        src={logo}
        layout="fixed"
        width={50}
        height={50}
      />
    </Link>
  );
};

export default Logo;
