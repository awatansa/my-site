import { signIn } from "next-auth/react";
import Image from "components/Image";
import GoogleLogo from "core/assets/svg/icons8-google.svg";

export default function Login({ providers }) {
  console.log(providers);

  function Brand() {
    return (
      <div>
        <h3 className={"text-6xl font-bold text-24"}>Login to Access More</h3>
        <p className={"pt-8"}>There is much more awaiting for you after you login.</p>
      </div>
    );
  }

  function LoginButton({ provider }) {
    return (
      <button
        key={provider.id}
        className={
          "flex items-center gap-2 bg-white rounded-md shadow-md overflow-hidden " +
          "text-slate-600 bg-white hover:bg-slate-100 " +
          "dark:text-slate-200 dark:bg-slate-600 dark:hover:bg-slate-700 dark:shadow-slate-700 "
        }
        onClick={() => signIn(provider.id)}
      >
        <Image className={"p-2 bg-slate-200 dark:bg-slate-200"} width={24} height={24} src={GoogleLogo} alt={provider.name} />
        <span className={"pt-2 pr-2 pb-2 truncate"}>Sign in with {provider.name}</span>
      </button>
    );
  }

  return (
    <>
      <div className={"flex h-full divide-x divide-slate-400 dark:-divide-slate-700"}>
        <div className={"flex justify-center items-center w-full"}>
          <Brand />
        </div>
        <div className={"flex justify-center items-center mx-auto min-w-fit px-12"}>
          {Object.values(providers)?.map((provider) => (
            <LoginButton key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </>
  );
}
