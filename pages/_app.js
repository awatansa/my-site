import "../styles/globals.css";
import {Provider} from "next-auth/client";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";

config.autoAddCss = false;

function MyApp({Component, pageProps}) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
