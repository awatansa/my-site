import { getProviders } from "next-auth/react";
import Login from "components/Login";

export default function SignIn({ providers }) {
  return <Login providers={providers} />;
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
