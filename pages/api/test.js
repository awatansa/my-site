import dbConnect from "core/db";
import { getSession } from "next-auth/react";
import httpStatus from "http-status";
import Log from "core/db/models/Log";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session?.user.email === process.env.DEFAULT_USER_EMAIL) {
    await dbConnect();
    await Log.create({
      message: `This is working fine ${req.toString()}`,
      api: "test.js api"
    });
    res.status(200).json({ message: "Saved Successfully" });
  } else {
    res.status(httpStatus.UNAUTHORIZED).json({ error: "Must login first" });
  }
}