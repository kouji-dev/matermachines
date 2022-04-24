import s from "./Label.module.css";
import {SeeAll} from "@components/ui/Link";
import {FC} from "react";

interface Props {
    label: string;
    href: string;
}

export const Label: FC<Props> = ({label, href}) => {
    return (
        <div className={s.container}>
            <h2 className={s.label}>{label}</h2>
            <SeeAll href={href}/>
        </div>
    )
}