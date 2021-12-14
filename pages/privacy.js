import Privacy from "components/Privacy";
import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Page</title>
        <meta name={"description"} content={"Read the privacy page about the application"} />
      </Head>
      <Privacy />
    </>
  );
}
