import React, { useState } from "react";

const FunComp = ({firstProps, ...abcdc}) => {
  const [number, setNumber] = useState(0);

  const array = () => {
    const arrayDemo = [1,2,3,4,5]
    const arrayDemo2 = [6,7,8,9]
    const [a,b,...rest] = arrayDemo
    console.log(a)
    console.log(b)
    console.log(rest)
    const spreadArray = [...arrayDemo,...arrayDemo2]
    console.log(spreadArray);
  }

  return (
    <div>
      <div>Function Component <hr/>{firstProps} <hr/>{abcdc.secondProps} <hr/> {abcdc.thirdProps}</div>
      <hr />
      {number}
      {array()}
      <hr />
      <button onClick={() => setNumber(number + 1)}>INCREMENT</button>
      <hr />
      <button onClick={() => setNumber(number + 1)}>DECREMENT</button>
      <hr />
    </div>
  );
};

export default FunComp;
