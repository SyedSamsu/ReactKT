import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { decrementAction, incrementAction, statusDownAction, statusUpAction } from '../action/Action';

function ReduxEg() {

  const counterValue = useSelector(state => state.counter);
  const statusName = useSelector(state => state.status.name);
  const statusStaus = useSelector(state => state.status.status);

  const dispatch = useDispatch();

  const increment = () => {
    console.log("INCREMENTING DISPATCH");
    dispatch(incrementAction("INCREMENT",2))

  }
  const decrement = () => {
    console.log("DECRMENTING DISPATCH" );
    dispatch(decrementAction(2))
  
  }

  const statusCheck = () => {
    console.log("DECRMENTING DISPATCH" );
    dispatch(statusUpAction())
  }
  const statusDOWNCheck = () => {
    console.log("DECRMENTING DISPATCH" );
    dispatch(statusDownAction())
  }

  return (
    <div>ReduxEg

        <div>Counter Value From Store - {counterValue} </div>
        <div>Staus Name Value From Store - {statusName} </div>
        <div>Staus Name Value From Store - {statusStaus} </div>

        <Button onClick={increment}> INCREMENT + 2 </Button>
        <Button onClick={decrement}> DECREMENT +2  </Button>
        <button onClick={statusCheck}> STATUS UP CHECK</button>
        <button onClick={statusDOWNCheck}> STATUS DOWN CHECK</button>
    </div>
  )
}

export default ReduxEg