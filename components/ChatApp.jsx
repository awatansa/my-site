import {useSession} from "next-auth/client";
import styles from "styles/Chat.module.css"

export default function ChatApp() {
    const session =
    {
        "user": {
            "name": "Awatansa Vishwakarma",
            "email": "ravi.awatansa@gmail.com",
            "image": "https://lh3.googleusercontent.com/a-/AOh14GgDgf1QQ5yjRXhI4xWu7Y6dx7HxPSbYrCVTI1D8RgU=s96-c"
        },
        "expires": "2022-01-07T17:17:16.619Z"
    }
    return (
        <div className={styles.chat}>
            {session && <h3>Welcome {session.user.name}!</h3>}
            {!session && <h3>Please Login First</h3>}
        </div>
    )
}