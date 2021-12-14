import Link from "next/link";
import { URL } from "core/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Accounts from "components/Accounts";
import Head from "next/head";
import { useFavicon } from "core/utils/hooks";

export default function Layout({ children }) {
  const favicon = useFavicon();
  return (
    <>
      <Head>
        <title>Awatansa:Portfolio</title>
        {favicon()}
      </Head>

      <div
        className={
          "relative flex flex-col w-screen h-screen justify-center items-center " +
          "bg-white text-slate-600 " +
          "dark:bg-slate-900 dark:text-slate-400"
        }
      >
        <div
          className={
            "relative flex flex-col px-4 w-10/12 h-5/6 bg-gray-200 divide-y rounded-lg shadow-lg opacity-95 " +
            "divide-slate-400 shadow-slate-600/50 " +
            "dark:bg-slate-800 dark:shadow-slate-700/50"
          }
        >
          <nav className={"relative"}>
            <div className={"relative grid grid-cols-3 mt-4 pt-2 pb-4"}>
              <ul className={"col-span-2 flex justify-evenly"}>
                <li>
                  <Link href={URL.HOME}>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href={URL.CHAT}>
                    <a>Chat</a>
                  </Link>
                </li>
                <li>
                  <Link href={URL.ABOUT}>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href={URL.DISCORD}>
                    <a target={"_blank"}>Discord </a>
                  </Link>
                  <sup>
                    <FontAwesomeIcon size={"sm"} icon={faExternalLinkAlt} />
                  </sup>
                </li>
              </ul>
              <Accounts className={"col-span-1 flex justify-evenly"} />
            </div>
          </nav>
          <main className={"relative flex flex-col flex-1 py-4"}>{children}</main>
        </div>
      </div>
    </>
  );
}
