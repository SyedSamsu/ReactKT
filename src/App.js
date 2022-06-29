import { useState } from "react";
import "./App.css";
import FunComp from "./functioncomponent/FunComp.js";
import FunUseStateArray from "./functioncomponent/FunUseStateArray";
import FunUseStateObject from "./functioncomponent/FunUseStateObject";

export default function App() {
  const [first, setfirst] = useState("PROPS FROM PARENT")
  return (
    <div className="App">
      <button onClick={() =>  setfirst(!first)}> RENDER COMPONENT</button>
      {/* {first ? <Counter first={first}/> : null } */}
      {/* {first ? <FunComp  parentProps={first}/> : null } */}
      {/* <FunUseStateObject /> */}
      <FunUseStateArray/>
    </div>
  );
}
