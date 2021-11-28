import {useSession, signIn, signOut} from 'next-auth/client'

export default function Index() {
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
            {session && <a href="#" onClick={handleSignOut} className="btn-signin">Sign out</a>}
            {!session && <a href="#" onClick={handleSignIn} className="btn-signin">Sign in</a>}
        </div>
    )
}