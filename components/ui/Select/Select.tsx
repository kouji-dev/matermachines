import {FC} from "react";
import s from './Select.module.css'
import cn from "classnames";

interface Props<T extends {id: number, label: string} = any> {
    items: T[];
    defaultSelected: T;
    onSelect: (selected: string | number) => void;
    className?: string;
}



export const Select: FC<Props> = ({items, defaultSelected, onSelect, className}) => {

    return (<select onChange={(e) => onSelect(e.target.value)} defaultValue={defaultSelected} className={cn(className, s.root)}>
        {items.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
    </select>)
}