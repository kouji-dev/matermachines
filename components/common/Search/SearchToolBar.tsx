import {FC} from "react";
import {SEARCH_ORDER} from "@utils/sort";
import {Select} from "@components/ui/Select";

interface Props {
    orderBy?: string | number;
    onOrderByChange: (orderBy?: string | number) => void,
    className?: string;
}

export const SearchToolBar: FC<Props> = ({orderBy = SEARCH_ORDER[0], onOrderByChange, className}) => {
    return (<Select className={className} items={SEARCH_ORDER} defaultSelected={orderBy} onSelect={onOrderByChange}/>)
}