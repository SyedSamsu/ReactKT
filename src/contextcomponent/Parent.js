import React from "react";
import Child1 from "./Child1";

export const UserNameContext = React.createContext();

function Parent() {
  //state
  const username = "syedsamsu..........";

  return (
    <div>
      parent
      {/* <Child1 username={username}/> */}
      <UserNameContext.Provider value={username}>
        <Child1 />
      </UserNameContext.Provider>
    </div>
  );
}

export default Parent;
