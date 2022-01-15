import About from "components/About";
import Head from "next/head";
import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Application</title>
        <meta name={"description"} content={"Find more about the application"} />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
