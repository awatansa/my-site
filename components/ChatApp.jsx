import { faKissWinkHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatApp() {
  return (
    <div className={"flex justify-center items-center h-full"}>
      <h1 className={"text-bold text-6xl text-slate-600 dark:text-slate-400"}>
        Coming Soon... <FontAwesomeIcon icon={faKissWinkHeart} />
      </h1>
    </div>
  );
}
