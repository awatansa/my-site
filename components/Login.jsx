import { signIn, signOut } from "next-auth/react";
import { useSession } from "core/utils/hooks";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Login({ className }) {
  const { data: session } = useSession();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn().then((res) => console.log(res));
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut().then((res) => console.log(res));
  };

  function UserImage() {
    return (
      <div
        className={
          "w-[24px] h-[24px] rounded-full ring-2 ring-offset-2 ring-offset-1 ring-offset-slate-400 overflow-hidden dark:ring-offset-slate-600"
        }
      >
        <Image src={session.user.image} alt={session.user.name} width={24} height={24} />
      </div>
    );
  }

  function UserIcon() {
    return (
      <div
        className={
          "flex justify-center items-center h-[24px] w-[24px] rounded-full bg-slate-400 ring-2 ring-offset-2 ring-offset-slate-400 dark:bg-slate-600 dark:ring-offset-slate-600"
        }
      >
        <FontAwesomeIcon icon={faUser} />
      </div>
    );
  }

  return (
    <>
      <ul className={className}>
        {session ? (
          <>
            <li>
              <a className={"cursor-pointer"} onClick={handleSignOut}>
                Sign Out
              </a>
            </li>
            <li>
              <UserImage />
            </li>
          </>
        ) : (
          <>
            <li>
              <a className={"cursor-pointer"} onClick={handleSignIn}>
                Sign In
              </a>
            </li>
            <li>
              <UserIcon />
            </li>
          </>
        )}
      </ul>
    </>
  );
}
