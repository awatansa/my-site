import Head from "next/head";
import Index from "components/Index";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Awatansa: Portfolio</title>
        <meta
          name="description"
          content="Welcome to Awatansa: Portfolio web app"
        />
      </Head>
      <Index />
    </>
  );
}
