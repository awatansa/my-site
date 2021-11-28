import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Awatansa: Portfolio</title>
                <meta name="description" content="Self Developed Application using NextJS"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Header/>
                <h1>Hello Awatansa!</h1>
            </main>

            <footer className={styles.footer}>
                <a href={"/terms_and_privacy"}>Terms & Privacy</a>
            </footer>
        </div>
    )
}
