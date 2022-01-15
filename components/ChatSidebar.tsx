import { Wrapper } from "components";
import { useEffect, useState } from "react";

export default function ChatSidebar() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/public/quotes").then(res => res.json());
      setQuote(data);
    }
    fetchData();
  }, []);

  console.log(quote);

  return (
    <Wrapper className={"flex flex-col justify-center items-center"}>
      <h1>Today&apos;s Gyan</h1>
      <p>{quote.msg}</p>
      <p>{quote.author}</p>
    </Wrapper>
  );
}