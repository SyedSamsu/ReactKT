import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const counterValue = useSelector((state) => state.counter);
  const statusName = useSelector((state) => state.status.name);
  const statusStaus = useSelector((state) => state.status.status);

  return (
    <div>
      <div>Counter Value From Store - {counterValue} </div>
      <div>Staus Name Value From Store - {statusName} </div>
      <div>Staus Name Value From Store - {statusStaus} </div>
      Home
    </div>
  );
}

export default Home;
