import Head from "next/head";
import { useTitle } from "core/utils/hooks";
import Index from "components/Index";

export default function HomePage() {
  useTitle("Home");

  return (
    <>
      <Head>
        <title>Awatansa: Portfolio</title>
        <meta name="description" content="Welcome to Awatansa: Portfolio web app" />
      </Head>
      <Index />
    </>
  );
}
