import { Button } from '@mui/material'
import React, { useState } from 'react'
import TodoAdd from './TodoAdd';
import TodosList from './TodosList';
import TodoView from './TodoView'

function Index() {

  const [TodosMakeList, setTodoList] = useState(false);
  const [TodosView, setTodoView] = useState(true);
  const [TodosAdd, setTodoAdd] = useState(false);


  return (
    <div>
      <Button onClick={() => {setTodoList(true); setTodoView(false); setTodoAdd(false)}}>Todos List</Button>
      <Button onClick={() => {setTodoList(false); setTodoView(true); setTodoAdd(false)}}>Todo_View</Button>
      <Button onClick={() => {setTodoList(false); setTodoView(false); setTodoAdd(true)}}>Todo_ADD_Delete_Update </Button>

     {TodosMakeList &&  <TodosList/>} 
     {TodosView &&  <TodoView/>} 
     {TodosAdd &&  <TodoAdd/>} 

     
    </div>
  )
}

export default Index