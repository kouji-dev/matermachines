import { FC } from "react";
import { Link } from "..";

import s from "./Deal.module.css";

interface Props {
  text: string;
  href: string;
}

export const Deal: FC<Props> = ({ children, text, href }) => {
  return (
    <Link href={`deal/${href}`}>
      <div className={s.deal}>
        {children}
        <span className={s.dealText}>{text}</span>
      </div>
    </Link>
  );
};
