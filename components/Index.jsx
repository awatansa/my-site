import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index() {
  return (
    <div className={"flex justify-center items-center h-full"}>
      <h1 className={"text-bold text-6xl text-slate-600 dark:text-slate-400"}>
        Welcome to Awatansa Portfolio App <FontAwesomeIcon icon={faSmileBeam} />
      </h1>
    </div>
  );
}
