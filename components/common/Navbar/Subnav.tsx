import { Deal } from "@components/ui";
import {
  FireIcon,
  LightningBoltIcon,
  SparklesIcon,
  TagIcon,
} from "@heroicons/react/outline";
import {
  FireIcon as Fire,
  LightningBoltIcon as LightingBolt,
  SparklesIcon as Sparkles,
  TagIcon as Tag,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { FC } from "react";
import s from "./Navbar.module.css";

interface Props {}

export const SubNav: FC<Props> = () => {
  const { query } = useRouter();

  return (
    <div className={s.subHeader}>
      <Deal text={"Hot Deals"} href="hot" active={query?.tag === "hot"}>
        <FireIcon className="w-5 h-5" />
      </Deal>
      <Deal text={"New Arrivals"} href="new" active={query?.tag === "new"}>
        <SparklesIcon className="w-5 h-5" />
      </Deal>
      <Deal text={"Today's Deal"} href="today" active={query?.tag === "today"}>
        <LightningBoltIcon className="w-5 h-5" />
      </Deal>
      <Deal text={"Special Price"} href="promo" active={query?.tag === "promo"}>
        <TagIcon className="w-5 h-5" />
      </Deal>
    </div>
  );
};
