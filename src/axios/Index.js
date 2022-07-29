import { Button } from '@mui/material'
import React, { useState } from 'react'
import TodosList from './TodosList';
import TodoView from './TodoView'

function Index() {

  const [TodosMakeList, setTodoList] = useState(false);
  const [TodosView, setTodoView] = useState(true);


  return (
    <div>
      <Button onClick={() => {setTodoList(!TodosMakeList)}}>TodosList</Button>
      <Button onClick={() => {setTodoView(!TodosView)}}>TodoView</Button>

     {TodosMakeList &&  <TodosList/>} 
     {TodosView &&  <TodoView/>} 

     
    </div>
  )
}

export default Index