import React, { Component } from 'react'

function Error(props){
  return <div>
    {props}
  </div>
}

export default class Counter extends Component {

  constructor(props){
    console.log("CONSTRUCTOR");
    super(props);
    this.state={
      number:0,
      loading:true
    }
  }

  increment = () => {
    console.log("INCREMENT LOG");
    this.setState({number: this.state.number+1})
  }
  decrement = () => this.setState({number: this.state.number-1})

  render() {
    console.log("RENDER")

    if(this.state.loading){
      return <div>LOADING.......</div>
    }

    if(this.state.error){
      return <div>ERROR {this.state.error.message}</div>
    }

    return (
      <div>
        Counter
        <hr/>
      {this.state.number}
      <hr/>
      <button onClick={this.increment}>INCREMENT</button>
      <hr/>
      <button onClick={this.decrement}>DECREMENT</button>
      {/* <Error/> */}
      </div>

    )
  }  

  componentDidMount(){
    console.log("COMPONENT DID MOUNT");
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    console.log("COMPONENT DID UPDATE");
  }

  componentWillUnmount(){
    console.log("COMPONENT WILL UNMOUNT");
  }

  componentDidCatch(error,info){
    this.setState({error,info})
  }


}
