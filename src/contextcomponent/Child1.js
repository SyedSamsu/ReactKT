import React from 'react'
import Child2 from './Child2'

function Child1(props) {
  return (
    <div>child1

      {/* <Child2 {...props}/> */}
      <Child2 />
    </div>
  )
}

export default Child1