import React from "react";

function HOC(Component, data) {
  return class extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        count: 0
      }
    }

    increment = () => {
      this.setState({...this.state,count: this.state.count + 1})
    }

    decrement = () => {
      this.setState({...this.state,count: this.state.count - 1})
    }

    reset = () => {
      this.setState({...this.state, count: 0})
    }

    render() {
      return (
        <div>
          HOC
          <Component count={this.state.count} increment={this.increment} decrement={this.decrement} reset={this.reset} />
        </div>
      );
    }
  };
}

export default HOC;
