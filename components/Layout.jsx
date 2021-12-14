import Link from "next/link";
import { URL } from "core/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
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
          "relative w-screen h-screen bg-white dark:bg-slate-900 flex justify-center items-center text-slate-600 dark:text-slate-400"
        }
      >
        <div
          className={
            "absolute w-10/12 h-5/6 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-lg shadow-slate-600/50 dark:shadow-slate-700/50 opacity-95 "
          }
        >
          <nav
            className={
              "grid grid-cols-3 mt-4 pt-2 pb-4 border-b border-slate-500 dark:border-slate-400"
            }
          >
            <ul
              className={"col-span-2 flex justify-evenly dark:text-slate-400"}
            >
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
            <Login
              className={"col-span-1 flex justify-evenly dark:text-slate-400"}
            />
          </nav>
          <main className={"h-full w-full"}>{children}</main>
        </div>
      </div>
    </>
  );
}
