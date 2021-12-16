import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughWink } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className={"flex justify-center items-center h-full w-full"}>
      <h1 className={"text-bold text-6xl text-slate-600 dark:text-slate-400"}>
        About the App is Coming Soon... <FontAwesomeIcon icon={faLaughWink} />
      </h1>
    </div>
  );
}
