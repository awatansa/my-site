import Head from "next/head";
import Link from "next/link"
import Login from "components/UserSession"
import styles from "styles/Chat.module.css"
import {URL} from "../utils/constants";
import ChatApp from "components/ChatApp";

export default function Chat() {
    return (
        <div className={"flex flex-column"}>
            <Head>
                <title>Chat With Awatansa:Bot</title>
                <meta name={"Awatansa chat bot"}/>
            </Head>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link href={URL.HOME}><a>Home</a></Link></li>
                    <li><Login/></li>
                </ul>
            </nav>
            <main>
                <ChatApp/>
            </main>
        </div>
    );
}
