import Head from "next/head";
import ChatApp from "components/ChatApp";

export default function ChatPage() {
  return (
    <>
      <Head>
        <title>Chat With Awatansa:Bot</title>
        <meta name={"Awatansa Chat Bot"} />
      </Head>
      <ChatApp />
    </>
  );
}

