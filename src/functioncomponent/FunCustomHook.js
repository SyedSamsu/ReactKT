import React, { useState } from 'react'
import useCounter from './useCounter'

function FunCustomHook() {

  const[count,increment,decrement,reset]=useCounter(100,5)
  const[count1,increment1,decrement1,reset1]=useCounter(546,50)

  return (
    <div>FunCustomHook
      <hr/>
      {count}
      <hr/>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
      <hr/>
      {count1}
      <hr/>
      <button onClick={increment1}>INCREMENT</button>
      <button onClick={decrement1}>DECREMENT</button>
      <button onClick={reset1}>RESET</button>
    </div>
  )
}

export default FunCustomHook