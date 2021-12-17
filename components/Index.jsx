import classes from "styles/Home.module.css";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiSpring } from "@react-icons/all-files/si/SiSpring";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  function Intro() {
    return (
      <div className={"flex flex-col gap-4 h-54 p-10 w-fit"}>
        <section>
          <h2 className={"font-semibold text-6xl"}>
            I&apos;m <br /><span
            className={"uppercase bg-clip-text lg:text-current hover:lg:text-transparent text-transparent bg-gradient-to-r from-purple-700 to-blue-500"}>Awatansa <br />Vishwakarma,</span>
          </h2>
        </section>
        <section>
          <div className={"text-4xl"}>
            <p>A Self Driven Software Developer,</p>
            <p>Specialized in <FaReact className={"inline-block"} /> <span
              className={"bg-clip-text lg:text-current hover:lg:text-transparent text-transparent bg-gradient-to-r from-purple-700 to-blue-500"}>React</span>, <SiSpring
              className={"inline-block"} /> <span
              className={"bg-clip-text lg:text-current hover:lg:text-transparent text-transparent bg-gradient-to-r from-purple-700 to-blue-500"}>SpringBoot, </span><SiMongodb
              className={"inline-block"} /><span
              className={"bg-clip-text lg:text-current hover:lg:text-transparent text-transparent bg-gradient-to-r from-purple-700 to-blue-500"}>MongoDB</span> &
              more...</p>
          </div>
        </section>
        <section>
          <div className={"flex gap-4 text-2xl"}>
            <button onClick={() => router.push("https://developers.google.com/profile/u/awatansa")}><FaGoogle />
            </button>
            <button onClick={() => router.push("https://github.com/awatansa")}><FaGithub /></button>
            <button onClick={() => router.push("https://linkedin.com/in/awatansa")}><FaLinkedin /></button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={"inline-block h-full w-full overflow-hidden"}>
      <div
        className={`${classes.scroll} flex flex-col flex-wrap gap-2 justify-between overflow-x-auto snap-x overflow-y-hidden w-full h-full pb-2`}
      >
        <Intro />
      </div>
    </div>
  );
}