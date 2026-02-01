import { useState } from "react";
import Count from "./Count";
import CountButtons from "./Countbuttons";
import Reset from "./Reset";
import Title from "./Title";

export default function Card(){
    const [count, setCount]= useState(0);
    return(
        <>
        <div className="card">
      <Title/>
      <Count count={count}/>
     <Reset setCount={setCount}/>
      <CountButtons setCount={setCount} count={count} />
    </div>
        </>
    );
}