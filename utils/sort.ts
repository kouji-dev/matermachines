export interface SearchOrder {
    id: number;
    label: string;
    sort: any
}

export const SEARCH_ORDER = [
    {
        id: 1,
        label: "Most Relevant",
        sort: {
            sortOrder: null,
            field: null
        }
    },
    {
        id:2,
        label: "Highest price",
        sort: {
            sortOrder: "DESC",
            field: "PRICE"
        }
    },
    {
        id:3,
        label: "Lowest price",
        sort: {
            sortOrder: "ASC",
            field: "PRICE"
        }
    },
    {
        id:4,
        label: "Top rated",
        sort: {
            sortOrder: "DESC",
            field: "RATING"
        }
    }
]