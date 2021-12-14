import { getSession } from "next-auth/react";
import httpStatus from "http-status";

export default async function test(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(httpStatus.UNAUTHORIZED).json({ message: "Login First to use this API" });
  } else {
    res.status(httpStatus.SUCCESS).json({ message: "test success" });
  }
}