import { useRouter } from "next/router";
import NotFound from "components/NotFound";
import Head from "next/head";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <NotFound path={router.pathname} />
    </>
  );
}
