import Head from "next/head";
import { NotFound } from "../components";

export default function ChatPage() {
  return (
    <>
      <Head>
        <title>Chat With Awatansa:Bot</title>
        <meta name={"Awatansa Chat Bot"} />
      </Head>
      <NotFound path={"/chat"} />
    </>
  );
}

