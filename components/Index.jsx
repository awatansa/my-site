import { useRef } from "react";
import classes from "styles/Home.module.css";

export default function Index() {
  const arr = Array(500).fill("Value");
  const ref = useRef();

  function handleScroll(e) {
    // ref.current.scrollLeft += e.deltaY;
  }

  function Test(props) {
    let height = Math.floor(Math.random() * 200);
    let width = Math.floor(Math.random() * 200);
    if (height < 50) height = 50;
    if (width < 50) width = 50;
    return <div style={{ height, width }} className={"flex justify-center items-center bg-slate-500 w-72 snap-start shadow-md rounded"}>{props.arr}</div>;
  }

  return (
    <div className={"inline-block h-full w-full overflow-hidden"}>
      <div ref={ref}
           className={`${classes.scroll} flex flex-col flex-wrap gap-2 justify-evenly overflow-x-auto overflow-y-hidden scroll-smooth snap-x w-full h-full`}
           onWheel={handleScroll}>
        {arr.map((item, index) => <Test key={index} arr={index} />)}
      </div>
    </div>
  );
}
