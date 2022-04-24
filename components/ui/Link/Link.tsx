import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {FC} from "react";

export const Link: FC<NextLinkProps & {className?: string}> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};
