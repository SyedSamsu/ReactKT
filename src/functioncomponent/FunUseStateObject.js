import React, { useState } from "react";

const FunUseStateObject = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      <div>FunUseStateObject</div>
      <hr />
      FIRST NAME :{" "}
      <input
        value={name.firstName || "....."}
        onChange={(e) => setName({ ...name,firstName: e.target.value })}
      />
      <hr />
      LAST NAME :{" "}
      <input
        value={name.lastName || "......"}
        onChange={(e) => setName({ ...name,lastName: e.target.value })}
      />
      <hr />
      <h3>First name  {name.firstName}</h3>
      <h3>Last Name {name.lastName}</h3>
    </div>
  );
};

export default FunUseStateObject;
