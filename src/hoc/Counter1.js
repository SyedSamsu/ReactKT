import React, { Component } from 'react'
import HOC from './HOC'

class Counter1 extends Component {

  render() {
    return (
      <div>Counter1
        <h3>{this.props.count}</h3>
        <button onClick={  this.props.increment}> INCREMENT</button>
        <button onClick={  this.props.decrement}> DECREMENT</button>
        <button onClick={  this.props.reset}> REST</button>
      </div>
    )
  }
}

const Counter1HOC = HOC(Counter1);
export default Counter1HOC;