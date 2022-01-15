import { getSession } from "next-auth/react";
import { ADMIN } from "core/utils/constants";
import httpStatus from "http-status";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const session = await getSession({ req });
  if (session?.user?.email === ADMIN) {
    res.status(httpStatus.CREATED).json({ msg: "Successfully Created" });
  } else {
    res.status(httpStatus.UNAUTHORIZED).json({ msg: "You are Unauthorized." });
  }
}