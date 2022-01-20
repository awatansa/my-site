import type { NextApiRequest, NextApiResponse } from "next";
import { Quote } from "core/commons/types";

export default function handler(req: NextApiRequest, res: NextApiResponse<Quote>) {

  const quoteList: Quote[] = [
    { quote: "People with similar mindset has high probability ending-up together", author: "Awatansa Vishwakarma" },
    { quote: "Lets Have Fun!", author: "Awatansa Vishwakarma" },
    { quote: "Keep Calm and do you work", author: "Awatansa Vishwakarma" },
    { quote: "Test Quote!", author: "Awatansa Vishwakarma" },
    { quote: "Lovely Days Ahead", author: "Awatansa Vishwakarma" }
  ];
  res.status(200).json(quoteList[Math.floor(Math.random() * quoteList.length)]);
}