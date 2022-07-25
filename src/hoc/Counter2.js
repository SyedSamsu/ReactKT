import React, { Component } from 'react'
import HOC from './HOC';

export class Counter2 extends Component {
  render() {
    return (
      <div>Counter2
        <h3>{this.props.count}</h3>
        <button onClick={this.props.increment}> INCREMENT</button>
        <button onClick={this.props.decrement}> DECREMENT</button>
        <button onClick={this.props.reset}> REST</button>
      </div>
    )
  }
}

const Counter2HOC = HOC(Counter2);
export default Counter2HOC;