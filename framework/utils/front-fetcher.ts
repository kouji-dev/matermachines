import { SESSION_HEADER_KEY } from "@utils/const";
import { getSession } from "@utils/session";

export const fetcher = (url: string) => {
  let session = getSession();

  let headers: any = {
    "Content-type": "application/json",
  };

  if (session) {
    headers[SESSION_HEADER_KEY] = session;
  }

  return fetch(url, {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((json) => json.data);
};
