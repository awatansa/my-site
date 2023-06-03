export type Message = {
  id: string;
  from: "client" | "admin";
  message: string;
  time: string;
};

export type ErrorResponse = {
  code: number;
  message: string;
};

export type ChatList =
  | {
      messages?: Message[];
    }
  | undefined;

export type ApiResponse = {
  error?: ErrorResponse;
  data?: Message;
};

export type CreateMessage = (message: string | undefined, from: "client" | "admin") => Message;

export type Quote = {
  quote: string;
  author: string;
};
