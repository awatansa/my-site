import { Wrapper } from "components";
import ReactMarkdown from "react-markdown";
import { useGetRandomQuoteQuery } from "../core/client/services/api";

export default function ChatSidebar() {
  const { data, isLoading } = useGetRandomQuoteQuery({});

  function transformedQuote() {
    return `> ${data?.quote}`;
  }

  return (
    <Wrapper className={"flex flex-col dark:bg-slate-200/50 px-2"}>
      {isLoading ? "Loading..." : <article className={"prose mt-4"}>
        <ReactMarkdown>
          {transformedQuote()}
        </ReactMarkdown>
        <p className={"text-sm text-right"}>{data?.author}</p>
      </article>}
    </Wrapper>
  );
}