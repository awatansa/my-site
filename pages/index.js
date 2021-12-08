import Head from "next/head";
import Link from "next/link"
import styles from "styles/Home.module.css";
import {useFavicon, useTitle} from "utils/hooks";
import {URL} from "utils/constants"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    const favicon = useFavicon();
    useTitle("Home");

    return (
        <div className={styles.container}>
            <Head>
                <title>Awatansa: Portfolio</title>
                <meta
                    name="description"
                    content="Self Developed Application using NextJS"
                />
                {favicon()}
            </Head>

            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link href={URL.HOME}><a>Home</a></Link></li>
                    <li><Link href={URL.CHAT}><a>Chat</a></Link></li>
                    <li>
                        <Link href={URL.DISCORD}>
                            <a target={"_blank"} className={"discord"}>Discord <sup><FontAwesomeIcon
                                icon={faExternalLinkAlt} size={"xs"}/></sup></a>
                        </Link>
                    </li>
                    <li><Link href={URL.ABOUT}><a>About</a></Link></li>
                </ul>
            </nav>

            <main className={styles.main}>
                <h1>Hello Awatansa!</h1>
            </main>

            <footer className={styles.footer}>
                <a href={URL.DECLARE}>Terms & Privacy</a>
            </footer>
        </div>
    );
}
