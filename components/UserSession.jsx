import {signIn, signOut, useSession} from 'next-auth/client'

export default function UserSession() {
    const [session] = useSession();


    const handleSignIn = (e) => {
        e.preventDefault();
        signIn()
    }

    const handleSignOut = (e) => {
        e.preventDefault();
        signOut()
    }

    console.log(session)

    return (
        <div className={"header"}>
            {session && (
                <>
                    <p>{session.user}</p>
                    <a href="#" onClick={handleSignOut}>Sign out</a>
                </>
            )}
            {!session && <a href="#" onClick={handleSignIn}>Sign in</a>}
        </div>
    )
}