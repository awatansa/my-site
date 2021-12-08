import styles from "styles/Declaration.module.css"
import Link from "next/link"
import {URL} from "utils/constants"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmileWink} from "@fortawesome/free-solid-svg-icons"

export default function Declaration() {
    return (
        <div className={"flex flex-column justify-content-center align-items-center py-8"}>
            <nav>
                <Link href={URL.HOME}>Back to Home</Link>
            </nav>
            <div className={styles.narrow}>
                <div className={"flex flex-column"}>
                    <h3>Terms</h3>
                    <p>
                        If you are using the service, make sure not to enter your passwords
                        (except while logging in with google), anywhere in this application.
                        This application is created just to try out some features of making
                        chat bot application.
                    </p>
                </div>
                <div className={"flex flex-column"}>
                    <h3>Privacy</h3>
                    <p>
                        We respect your privacy, and your identity is not shared with anyone else
                        for any reason. Feel free to use this app as much you want. Although there
                        is nothing much to do here for now <FontAwesomeIcon icon={faSmileWink}/>...
                        Only data collected is your name and email address, just to identify you.
                        This will never be used for spamming your email with useless things.
                    </p>
                    <p>
                        This app doesn&apos;t include any ML or AI feature, it is just simple
                        question type application. (maybe later, but currently dont have any such plan)
                    </p>
                </div>
                <div className={"flex flex-column"}>
                    <h3>What we do with your data?</h3>
                    <p>
                        Except Identifying who is using this app, Nothing... <FontAwesomeIcon icon={faSmileWink}/>
                    </p>
                </div>
            </div>
        </div>
    );
}
