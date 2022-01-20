import { getSession } from "next-auth/react";
import httpStatus from "http-status";
import type { NextApiHandler } from "next";
import { ApiResponse } from "core/commons/types";
import { v4 as uuid } from "uuid";

const handler: NextApiHandler<ApiResponse> = async (req, res) => {
  const session = await getSession({ req });
  const message = `# Hello ${session?.user?.name}
  
  I was expecting you here
  
  > It is highly recommended not to use this chat, It is just for fun nothing else.
  
  Lets Go!!!
  
  - Person 1
  - Person 2
  
  Nothing is Amazing more than this!
  
  `;

  if (session?.user?.email) {
    // await dbConnect();
    res.status(httpStatus.OK).json({
      data: {
        id: uuid(),
        message: message,
        time: new Date().toLocaleString(),
        from: "admin"
      }
    });
  } else {
    res.status(httpStatus.UNAUTHORIZED).json({
      error: {
        message: "User Not Logged In!",
        code: httpStatus.UNAUTHORIZED
      }
    });
  }
};

export default handler;