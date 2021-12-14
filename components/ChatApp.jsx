import { faKissWinkHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "../core/utils/hooks";
import { signIn } from "next-auth/react";

export default function ChatApp() {
  const { data, status } = useSession();

  function TempComponent() {
    return (
      <div className={"flex justify-center items-center h-full"}>
        <h1 className={"text-bold text-6xl text-slate-600 dark:text-slate-400"}>
          Coming Soon... <FontAwesomeIcon icon={faKissWinkHeart} />
        </h1>
      </div>
    );
  }

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

  return <div className={"w-full h-full"}>{data ? <TempComponent /> : <LoginFirst />}</div>;
};
