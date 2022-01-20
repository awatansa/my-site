import ChatBubble from "./ChatBubble";
import React from "react";
import { ChatList } from "core/commons/types";
import { useSelector } from "core/client/store";

const ChatFeed: React.FC = () => {

  const chatFeed = useSelector<ChatList>(state => state.main.chatFeed);

  return (
    <ul className={"flex flex-col grow overflow-y-scroll overflow-x-hidden scroll"}>
      {chatFeed?.messages?.map(item => {
        return <ChatBubble key={item.id} {...item} />;
      })}
    </ul>
  );
};
export default ChatFeed;