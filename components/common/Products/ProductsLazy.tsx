import {FC, useCallback, useEffect, useState} from "react";
import {Maybe, WpPageInfo} from "@framework/graphql";
import {Product as ProductType} from "@framework/types";
import {Products} from "@components/common";
import {Loading} from "@components/ui";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {SearchToolBar} from "@components/common/Search";
import {SEARCH_ORDER, SearchOrder} from "@utils/sort";

interface Props {
    query: string;
    search: (q: string, sortOrder: string, field: string, cursor?: string,) => Promise<{products: Maybe<ProductType>[], pageInfo: any}>
}
const INITIAL_PAGE = {endCursor: "", hasNextPage: false, hasPreviousPage: false, startCursor: null};
export const ProductsLazy: FC<Props> = ({search, query}) => {
    const [page, setPage] = useState<Maybe<WpPageInfo>>(INITIAL_PAGE);
    const [order, setOrder] = useState<SearchOrder>(SEARCH_ORDER[0]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);

    console.log(query, page);

    const loadData = (init = true) => {
        setLoading(true);
        const {
            sortOrder,
            field
        } = order.sort;
        search(query, sortOrder, field, page?.endCursor as string)
            .then(({products, pageInfo}) => {
                console.log(pageInfo)
                setPage(pageInfo);
                setData((data) => init ? products : [...data, ...products]);
            })
            .finally(() => setLoading(false))
            .catch((e) => {
                //setError
                console.log(e);
            })
    }

    const onOrderByChange = useCallback((orderId?: any) => {
        const order = SEARCH_ORDER.find(o => o.id == orderId);
        if(order) {
            setPage(INITIAL_PAGE);
            setOrder(order);
        }
    }, [setOrder])

    useEffect(() => {
        console.log("initial search ")
        if(query) {
            setPage((a) => INITIAL_PAGE)
            loadData();
        }
    }, [setPage, setLoading, setData, search, query, order])

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const {innerHeight} = window;
            if(document.body.scrollHeight == Math.floor(-currPos.y + innerHeight) && page?.hasNextPage) {
                loadData(false)
            }
        },
        [page]
    )

    return (
        <div className="flex flex-col gap-y-6 items-end">
            <SearchToolBar className="float-right" onOrderByChange={onOrderByChange} orderBy={order.id}/>
            <Products products={data}/>
            {loading && <Loading />}
        </div>
    )
}