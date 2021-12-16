import { useEffect, useState } from "react";
import classes from "styles/Home.module.css";

export default function Index() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setIsLoading(false);
    return data;
  }

  useEffect(() => {
    loadData().then(data => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[0]);


  function Test({ data }) {
    return (
      <div
        className={"flex flex-col justify-center gap-2 w-72 bg-slate-200 dark:bg-slate-700 shadow-md rounded p-2 snap-start"}>
        <h3 className={"font-bold text-xl uppercase"}>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    );
  }

  return (
    <div className={"inline-block h-full w-full overflow-hidden"}>
      <div
        className={`${classes.scroll} flex flex-col flex-wrap gap-2 justify-between overflow-x-auto snap-x overflow-y-hidden w-full h-full pb-2`}
      >
        {isLoading ?
          (<h3 className={"text-2xl"}>Loading...</h3>)
          : data.map((item, index) => (
            <Test key={index} data={item} />
          ))}
      </div>
    </div>
  );
}