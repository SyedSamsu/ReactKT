import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

export default function App() {
  const [first, setfirst] = useState(false)
  return (
    <div className="App">
      <button onClick={() =>  setfirst(!first)}> RENDER COMPONENT</button>
      {first ? <Counter first={first}/> : null }
    </div>
  );
}
