import React, { useState } from "react";

const FunUseStateArray = () => {
  const [numbers, setNumber] = useState([]);

  const addNumber = () => {
    setNumber([...numbers,{
      id: numbers.length,
      value: Math.floor(Math.random() * 10)  +1
    }])
  }

  return (
    <div>
      <div>FunUseStateArray</div>

      <hr/>
      <button onClick={addNumber}>Add a Random Number</button>
      <hr/>

      <ul>
        {numbers.map((number) => (
          <li key={number.id}> {number.id}:{number.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default FunUseStateArray;
