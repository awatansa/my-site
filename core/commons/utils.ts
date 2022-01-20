import { v4 as uuid } from "uuid";
import { CreateMessage } from "core/commons/types";

export const createMessage: CreateMessage = (message, from) => {
  return {
    message: message ? message : "",
    id: uuid(),
    from: from,
    time: new Date().toLocaleString()
  };
};