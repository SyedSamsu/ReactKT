import { useState } from "react";
import "./App.css";
import Parent from "./contextcomponent/Parent";
import Counter from "./Counter";
import ClassUseEffect from "./functioncomponent/ClassUseEffect";
import FunComp from "./functioncomponent/FunComp.js";
import FunCustomHook from "./functioncomponent/FunCustomHook";
import FunUseEffect from "./functioncomponent/FunUseEffect";
import FunUseRef from "./functioncomponent/FunUseRef";
import FunUseRef2 from "./functioncomponent/FunUseRef2";
import FunUseStateArray from "./functioncomponent/FunUseStateArray";
import FunUseStateObject from "./functioncomponent/FunUseStateObject";
import CustomRouter from "./reactrouter/CustomRouter";

export default function App() {
  const [render, setRender] = useState(true)
  const [first, setfirst] = useState("FIRST PROPS FROM PARENT")
  const [second, setSecond] = useState("SECOND PROPS FROM PARENT")
  const [third, setThird] = useState("THIRD PROPS FROM PARENT")
  return (
    <div className="App">
      {/* <button onClick={() =>  setRender(!render)}> RENDER COMPONENT</button> */}
      {/* {first ? <Counter first={first}/> : null } */}
   {/* <FunComp  firstProps={first} secondProps={second} thirdProps={third}/> */}
      {/* <FunUseStateObject /> */}
      {/* <FunUseStateArray/> */}
      
      {/* {render && <ClassUseEffect/>} */}
      {/* { render && <FunUseEffect/>} */}
      {/* <Parent/> */}
      {/* <FunUseRef/> */}
      {/* <FunUseRef2/> */}
      {/* <FunCustomHook/> */}
      <CustomRouter /> 
      </div>
  );
}
