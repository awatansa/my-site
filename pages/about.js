import About from "components/About";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Application</title>
        <meta
          name={"description"}
          content={"Find more about the application"}
        />
      </Head>
      <About />
    </>
  );
}
