import { getSession } from "next-auth/react";
import { ADMIN } from "core/utils/constants";
import httpStatus from "http-status";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session?.user.email === ADMIN) {
    res.status(httpStatus.OK).json({ message: "Success" });
  }
  res.status(httpStatus.UNAUTHORIZED).json({ message: "Not Allowed to access this API" });
}