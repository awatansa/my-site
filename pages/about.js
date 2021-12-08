import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmileWink} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import {URL} from "../utils/constants";

export default function About() {
    return (
        <div className={"flex m-5 justify-content-center"}>
            <main>
                <Link href={URL.HOME}><a>Back to Home</a></Link>
                <h1>Coming Soon... <FontAwesomeIcon icon={faSmileWink}/></h1>
            </main>
        </div>
    );
}
