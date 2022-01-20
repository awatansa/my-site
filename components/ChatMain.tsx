import React from "react";
import { Wrapper } from "components";
import NewMessage from "./Chat/NewMessage";
import ChatNavigationBar from "./Chat/ChatNavigationBar";
import ChatFeed from "./Chat/ChatFeed";

export default function ChatMain() {
  return (
    <Wrapper className={`relative flex flex-col grow bg-slate-50/40 dark:bg-slate-900/40`}>
      <ChatNavigationBar />
      <ChatFeed />
      <NewMessage />
    </Wrapper>
  );
}