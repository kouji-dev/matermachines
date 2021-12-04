import { FC } from "react";
import { Link } from "..";
import cn from "classnames";

import s from "./Deal.module.css";

interface Props {
  text: string;
  href: string;
  active?: boolean;
  activeCls?: string;
}

export const Deal: FC<Props> = ({ children, text, href, active }) => {
  const rootCls = cn(s.deal, {
    [s.active]: active,
  });

  return (
    <Link href={`/deal/${href}`}>
      <div className={rootCls}>
        {children}
        <span className={s.dealText}>{text}</span>
      </div>
    </Link>
  );
};
