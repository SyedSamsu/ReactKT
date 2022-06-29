import React, { useState } from "react";

const FunComp = (props) => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>Function Component {props.parentProps}</div>
      <hr />
      {number}
      <hr />
      <button onClick={() => setNumber(number + 1)}>INCREMENT</button>
      <hr />
      <button onClick={() => setNumber(number + 1)}>DECREMENT</button>
      <hr />
    </div>
  );
};

export default FunComp;
