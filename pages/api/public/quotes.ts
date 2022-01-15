import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: string,
  author: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = { author: "Awatansa Vishwakarma", msg: "It is a great Day" };
  res.status(200).json(data);
}