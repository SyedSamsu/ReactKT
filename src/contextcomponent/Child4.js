import React, { useContext } from "react";
import { UserNameContext } from "./Parent";

function Child4() {
  const username = useContext(UserNameContext);
  return (
    <div>
      Child4
      <div>
        Consuming props by UseContext  <h2>{username}</h2>
      </div>
    </div>
  );
}

export default Child4;
