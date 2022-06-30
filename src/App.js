import { useState } from "react";
import "./App.css";
import ClassUseEffect from "./functioncomponent/ClassUseEffect";
import FunComp from "./functioncomponent/FunComp.js";
import FunUseEffect from "./functioncomponent/FunUseEffect";
import FunUseStateArray from "./functioncomponent/FunUseStateArray";
import FunUseStateObject from "./functioncomponent/FunUseStateObject";

export default function App() {
  const [render, setRender] = useState(true)
  const [first, setfirst] = useState("FIRST PROPS FROM PARENT")
  const [second, setSecond] = useState("SECOND PROPS FROM PARENT")
  const [third, setThird] = useState("THIRD PROPS FROM PARENT")
  return (
    <div className="App">
      <button onClick={() =>  setRender(!render)}> RENDER COMPONENT</button>
      {/* {first ? <Counter first={first}/> : null } */}
   {/* <FunComp  firstProps={first} secondProps={second} thirdProps={third}/> */}
      {/* <FunUseStateObject /> */}
      {/* <FunUseStateArray/> */}
      
      {/* {render && <ClassUseEffect/>} */}
      { render && <FunUseEffect/>}
    </div>
  );
}
