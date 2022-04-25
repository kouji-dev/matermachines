import {Layout} from "@components/common";
import {PageComponent} from "@utils/common-types";
import {useRouter} from "next/router";
import {ProductsLazy} from "@components/common/Products";
import {SearchOrder} from "@utils/sort";

interface Props {
}

const Search: PageComponent<Props> = () => {
    const {query: {q} } = useRouter();

    const searchProducts = async (query: string, endCursor: string = "", sortOrder: SearchOrder['sort']['sortOrder'] = '', field: SearchOrder['sort']['field'] = '', size: string = "4") => {
        const {pageInfo, nodes} = await fetch('api/search?' + new URLSearchParams({query, endCursor, sortOrder, field, size}), {
            method: "GET",
        }).then(r => r.json());

        return {
            pageInfo,
            products: nodes
        } as any
    }

    return (<ProductsLazy query={q as string} search={searchProducts}/>)
}

Search.Layout = Layout;

export default Search;