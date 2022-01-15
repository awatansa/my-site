import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";

export default function Privacy() {
  return (
    <div className={"flex flex-col gap-6 m-auto p-4 lg:max-w-6xl"}>
      <section className={"py-2"}>
        <h3 className={"text-bold text-4xl py-2"}>Terms</h3>
        <p>
          If you are using the service, make sure not to enter your passwords (except while logging in with google),
          anywhere in this application. This application is created just to try out some features of making chat bot
          application.
        </p>
      </section>
      <section className={"py-2"}>
        <h3 className={"text-bold text-4xl py-2"}>Privacy</h3>
        <p>
          We respect your privacy, and your identity is not shared with anyone else for any reason. Feel free to use
          this app as much you want. Although there is nothing much to do here for now{" "}
          <FontAwesomeIcon icon={faSmileWink} />
          ... Only data collected is your name and email address, just to identify you. This will never be used for
          spamming your email with useless things.
        </p>
        <p>
          This app doesn&apos;t include any ML or AI feature, it is just simple question type application. (maybe later,
          but currently dont have any such plan)
        </p>
      </section>
      <section className={"py-2"}>
        <h3 className={"text-bold text-4xl py-2"}>What we do with your data?</h3>
        <p>
          Except Identifying who is using this app, Nothing... <FontAwesomeIcon icon={faSmileWink} />
        </p>
      </section>
    </div>
  );
}
