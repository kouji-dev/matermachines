import { FC } from "react";
import s from "./Badge.module.css";
import cn from "classnames";
import { Maybe } from "@framework/graphql";

interface Props {
  text: Maybe<string> | Maybe<number> | undefined;
  className?: string;
  size?: "xs" | "sm" | "md";
}

export const Badge: FC<Props> = ({ text, className, size = "sm" }) => {
  if (!text) return null;
  const rootClasses = cn(s.root, className ? className : s.default, {
    [s.xs]: size === "xs",
    [s.sm]: size === "sm",
    [s.md]: size === "md",
    [s.hot]: text === "HOT",
    [s.new]: text === "NEW",
  });

  return <span className={rootClasses}>{text}</span>;
};
