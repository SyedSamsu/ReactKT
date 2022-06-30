import React, { Component } from 'react'

export class ClassUseEffect extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      // count:0,
      // name:'',
      x:0,
      y:0
    }
  }

  getMousePostion = e => {
    console.log("UPDATED");
    this.setState({x:e.clientX,y:e.clientY})
  }

  componentDidMount(){

    //document.title= `Clicked ${this.state.count} times`
    window.addEventListener('mousemove',this.getMousePostion)
  }

  // componentDidUpdate(prevProps,prevState){
  //   if(prevState.count !== this.state.count){
  //     console.log("Update Document Title");
  //     document.title= `Clicked ${this.state.count} times`
  //   }
  // }

  componentWillUnmount(){
    window.removeEventListener('mousemove',this.getMousePostion)
  }

  render() {
    return (
      <div>
      Class example like UseEffect
      {/* <input value = {this.state.value} onChange={e => {
        this.setState({name : e.target.value})
      }}/>
      <div>
        <button onClick={()=>this.setState({count : this.state.count + 1})}>Clicked {this.state.count} times</button>
      </div> */}

      <div>
        X - {this.state.x} and Y - {this.state.y}
      </div>
    </div>
    )
  }
}

export default ClassUseEffect