import React, { useEffect, useState, useRef } from 'react'

function FunUseRef2() {

  const [timer,setTimer] = useState(0)

  const intervalRef = useRef()

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      setTimer(prevTimer => prevTimer + 1)
    },1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  },[])

  return (
    <div>FunUseRef2
      <hr/>
      {timer}
      <hr/>
      <button onClick={() =>clearInterval(intervalRef.current)}>STOP TIMER</button>
    </div>
  )
}

export default FunUseRef2