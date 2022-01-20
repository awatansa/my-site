import React from "react";
import { useGetRandomQuoteQuery } from "core/client/services/api";
import { useDispatch } from "core/client/store";
import { clearChatHistory } from "core/client/store/slice";

const ChatNavigationBar: React.FC = () => {
  const { refetch } = useGetRandomQuoteQuery({});
  const dispatch = useDispatch();
  return (
    <nav className={"mt-1 p-2"}>
      <ul className={"flex gap-2 justify-around"}>
        <li>
          <button className={"p-2 border rounded border-slate-400 dark:border-slate-600"} onClick={refetch}>Refresh
            Quote
          </button>
        </li>
        <li>
          <button
            className={"p-2 border rounded border-slate-400 dark:border-slate-600"}
            onClick={() => dispatch(clearChatHistory())}>Clear Chat
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default ChatNavigationBar;