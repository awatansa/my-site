import { useSession } from "core/utils/hooks";
import { signIn } from "next-auth/react";
import { ChatSidebar, ChatSuggestionSidebar, ChatMain } from "components";

export default function ChatApp() {
  const { data } = useSession();

  function LoginFirst() {
    return (
      <div className={"flex flex-col justify-center items-center w-full h-full"}>
        <section>
          <h3 className={"text-6xl pb-4"}>Login First</h3>
          <p>Welcome to ChatApp, a nice way to interact with available services.</p>
          <p>
            In order to use this service, please{" "}
            <button
              className={
                "rounded-sm px-2 ring-1 shadow-md active:shadow-inner active:ring-2 " +
                "active:bg-white bg-slate-100 " +
                "dark:active:ring-slate-600/50 dark:active:bg-slate-600 dark:bg-slate-700 dark:text-slate-400"
              }
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className={"w-full h-full"}>
      {data ?
        <div className={"relative flex justify-around items-center h-full w-full"}>
          <div className="w-1/3 h-full m-1">
            <ChatSidebar />
          </div>
          <div className="w-1/3 h-full m-1">
            <ChatMain />
          </div>
          <div className="w-1/3 h-full m-1">
            <ChatSuggestionSidebar />
          </div>
        </div>
        : <LoginFirst />
      }</div>
  );
};
