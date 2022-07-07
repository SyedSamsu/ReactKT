import React, { useEffect, useRef } from 'react'

function FunUseRef() {

  const inputRef  = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <div>FunUseRef

      <input type='text' />
      <input  type='text' />
      <input type='text' />
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default FunUseRef