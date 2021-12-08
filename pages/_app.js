import "../styles/globals.css";
import "../node_modules/primeflex/primeflex.css";
import {Provider} from "next-auth/client";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({Component, pageProps}) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
