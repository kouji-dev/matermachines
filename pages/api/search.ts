import {NextApiRequest, NextApiResponse} from "next";
import {searchProducts} from "@framework/api/operations/product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        const {query, endCursor, size, sortOrder, field} = req.query;

        const result =  await searchProducts(query, endCursor as string, Number(size), sortOrder as string, field as string)

        res.status(200).json(result);
    }

    return;
}