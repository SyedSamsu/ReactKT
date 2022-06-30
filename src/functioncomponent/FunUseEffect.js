import React, { useEffect, useLayoutEffect, useState } from 'react'

function FunUseEffect() {

  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePostion = (e) => {
    console.log("UPDATES");
    setX(e.clientX)
    setY(e.clientX)
  }

  useEffect(() => {
    // console.log("Update Document Title");
    // document.title = `Clicked ${count} times`
    console.log("WORKINGS");
    window.addEventListener('mousemove',getMousePostion)
    return () => {
      console.log("Component un mount");
      window.removeEventListener('mousemove', getMousePostion)
    }
  },[])

  // useLayoutEffect(() => {
  //   // console.log("Update Document Title");
  //   // document.title = `Clicked ${count} times`
  //   console.log("WORKINGS");
  //   window.addEventListener('mousemove',getMousePostion)
  //   return () => {
  //     console.log("Component un mount");
  //     window.removeEventListener('mousemove', getMousePostion)
  //   }
  // },[])
  
  return (
    <div>
      UseEffect
      {/* <div>
      <input value = {name} onChange={e => {
        setName(e.target.value)
      }}/>
        <button onClick={()=>setCount(count + 1 )}>Clicked {count} times</button>
      </div> */}
            <div>
        X - {x} and Y - {y}
      </div>
    </div>
  )
}

export default FunUseEffect
