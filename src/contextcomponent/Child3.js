import React from "react";
import { UserNameContext } from "./Parent";

function Child3(props) {
  return (
    <div>
      child3
      {/* Consuming props from <h2>{props.username}</h2>  */}
      <UserNameContext.Consumer>
        {(username) => {
          return (
            <div>
              Consuming props by Consumer <h2>{username}</h2>
            </div>
          );
        }}
      </UserNameContext.Consumer>
    </div>
  );
}

export default Child3;
