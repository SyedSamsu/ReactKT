import { Button } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'
import { decrementAction, incrementAction, statusDownAction, statusUpAction } from '../action/Action'

export class ReduxClassEg extends Component {
  render() {
    return (
      <div>ReduxClassEg

      <div>Counter Value From Store - {this.props.counterValue} </div>
      {/* <div>Staus Name Value From Store - {statusName} </div> */}
      <div>Staus Name Value From Store - {this.props.statusStatus} </div>

      <Button onClick={this.props.increment}> INCREMENT + 2 </Button>
      <Button onClick={this.props.decrement}> DECREMENT -2  </Button>
      <Button onClick={this.props.statusUP}> STATUS UP CHECK</Button>
      <Button onClick={this.props.statusDOWN}> STATUS DOWN CHECK</Button>
  </div>
    )
  }

}
const componentDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction("INCREMENT",2)),
    decrement: () => dispatch(decrementAction(2)),
    statusUP: () => dispatch(statusUpAction()),
    statusDOWN: () => dispatch(statusDownAction())
  }
}

const componentStateToProps = (state) => {
  return{
    counterValue: state.counter,
    statusStatus: state.status.status
  }
}

export default connect(componentStateToProps,componentDispatchToProps)(ReduxClassEg)