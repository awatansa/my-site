import classes from "styles/Home.module.css";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiSpring } from "@react-icons/all-files/si/SiSpring";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();

  function Intro() {
    return (
      <div
        className={"relative flex flex-col flex-grow gap-4 h-54 p-10 w-full lg:w-3/6 rounded-md lg:hover:bg-slate-50/5 lg:bg-transparent bg-slate-50/5"}>
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
            <button className={"bg-slate-50/5 rounded p-2"}
                    onClick={() => router.push("https://developers.google.com/profile/u/awatansa")}><FaGoogle />
            </button>
            <button className={"bg-slate-50/5 rounded p-2"} onClick={() => router.push("https://github.com/awatansa")}>
              <FaGithub /></button>
            <button className={"bg-slate-50/5 rounded p-2"}
                    onClick={() => router.push("https://linkedin.com/in/awatansa")}><FaLinkedin /></button>
          </div>
        </section>
      </div>
    );
  }

  function Skills() {
    return (
      <div
        className={"relative flex flex-grow gap-4 p-10 rounded-lg lg:hover:bg-slate-50/5 lg:bg-transparent bg-slate-50/5"}>
        {/*<ul>*/}
        {/*  <li>Java Spring Boot</li>*/}
        {/*  <li>Java Spring Boot</li>*/}
        {/*  <li>Java Spring Boot</li>*/}
        {/*</ul>*/}
      </div>
    );
  }

  return (
    <div className={"inline-block h-full w-full overflow-hidden"}>
      <div
        className={`${classes.scroll} flex flex-col flex-wrap flex-grow gap-2 justify-between overflow-x-auto snap-x overflow-y-hidden w-full h-full pb-2`}
      >
        <Intro />
        <Skills />
      </div>
    </div>
  );
}