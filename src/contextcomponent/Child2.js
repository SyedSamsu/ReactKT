import React from 'react'
import Child3 from './Child3'
import Child4 from './Child4'

function Child2(props) {
  return (
    <div>child2

      {/* <Child3 {...props}/> */}
      <Child3 />
      <Child4/>
    </div>
  )
}

export default Child2