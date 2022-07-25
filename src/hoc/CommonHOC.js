import React from "react";
import FunCustomHook from "../functioncomponent/FunCustomHook";
import Counter1HOC from "./Counter1";
import Counter2HOC from "./Counter2";

function CommonHOC() {
  return (
    <div>
      <Counter1HOC />
      <Counter2HOC />
      <FunCustomHook/>
    </div>
  );
}

export default CommonHOC;
