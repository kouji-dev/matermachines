import { NextApiResponse } from "next";
import { SESSION_HEADER_KEY, SESSION_ID } from "./const";

export const getSession = () => {
  return localStorage.getItem(SESSION_HEADER_KEY);
};

export const storeSession = (res: NextApiResponse) => {
  const session = res?.getHeader(SESSION_HEADER_KEY);

  if (!session) return;

  localStorage.setItem(SESSION_ID, session as string);
};
