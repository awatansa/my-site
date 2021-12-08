import {useSession} from "next-auth/client";
import styles from "styles/Chat.module.css"

export default function ChatApp() {
    const [session] = useSession()

    return (
        <div className={styles.chat}>
            {session && <h3>Welcome {session.user.name}!</h3>}
            {!session && <h3>Please Login First</h3>}
        </div>
    )
}