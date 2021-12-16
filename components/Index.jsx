import { useEffect, useRef, useState } from "react";
import classes from "styles/Home.module.css";

export default function Index() {
  const rootRef = useRef();
  const [data, setData] = useState([]);


  function handleScroll(e) {
    // ref.current.scrollLeft += e.deltaY;
  }

  async function loadData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  }

  useEffect(() => {
    loadData().then(data => setData(data));
  });


  function Test({ data }) {
    return (
      <div
        className={"flex flex-col justify-center gap-2 w-96 bg-slate-200 dark:bg-slate-700 snap-start shadow-md rounded p-2"}>
        <h3 className={"font-bold text-xl uppercase"}>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    );
  }

  return (
    <div className={"inline-block h-full w-full overflow-hidden"}>
      <div ref={rootRef}
           className={`${classes.scroll} flex flex-col flex-wrap gap-2 justify-between overflow-x-auto overflow-y-hidden scroll-smooth snap-x w-full h-full pb-2`}
           onWheel={handleScroll}>
        {data && data.map((item, index) => <Test key={index} data={item} />)}
      </div>
    </div>
  );
}