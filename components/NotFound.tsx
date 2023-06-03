import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

type Props = {
  path: string;
};

export default function NotFound(props: Props) {
  return (
    <div className={"flex justify-center items-center h-full"}>
      <h1 className={"text-bold text-6xl text-slate-600 dark:text-slate-400"}>
        {props.path} - Not Found <FontAwesomeIcon icon={faSadCry} />
      </h1>
    </div>
  );
}

