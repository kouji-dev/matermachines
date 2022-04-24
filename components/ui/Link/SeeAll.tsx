import { LinkProps } from "next/link";
import {FC} from "react";
import {Link} from "@components/ui";
import s from './Link.module.css'

interface Props {
    href: LinkProps['href']
}

export const SeeAll: FC<Props> = ({ href}) => {
  return (
    <Link href={href}>
      <span className={s.seeAll}>See all</span>
    </Link>
  );
};
