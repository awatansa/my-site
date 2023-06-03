import React from "react";
import { Message } from "core/commons/types";
import { useSession } from "core/commons/hooks";
import ReactMarkdown from "react-markdown";

const ChatBubble: React.FC<Message> = ({ from, message, time }) => {
  const { data } = useSession();
  return (
    <li
      className={`${
        from === "client" ? "self-end" : "self-start"
      } w-2/3 border rounded p-1 m-2 divide-y divide-slate-300 shadow-md dark:border-slate-600/50 dark:divide-slate-600/50`}
    >
      <div className={"flex justify-between"}>
        <h3 className={"mx-3"}>{from === "client" ? data?.user?.name : "Awatansa [ bot 🟢 ]"}</h3>
        <span className={"text-xs"}>{time}</span>
      </div>
      <article className={`p-3 ${from === "client" ? "" : "prose dark:bg-slate-200/50"}`}>
        {from === "client" ? message : <ReactMarkdown>{message}</ReactMarkdown>}
      </article>
    </li>
  );
};

export default ChatBubble;
