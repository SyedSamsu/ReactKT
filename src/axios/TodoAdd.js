import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import axios from "axios";

function TodoAdd() {
  const [todo, setTodo] = useState({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  });

  const [status, setStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const [error, setError] = useState(false);

  const dynamicToken = () => {
    return Math.random()
  }

  const handleSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
      HTTP_TOKEN: "asdasd",
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/todos/`, todo,{
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        setDeleteStatus(false);
        setError(false)
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const handleUpdateSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
      HTTP_TOKEN: dynamicToken(),
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo,{
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        setDeleteStatus(false);
        setError(false)
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }
  const handleDeleteSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
      HTTP_TOKEN: "asdasd",
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,{
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        setError(false)
        setStatus(false);
        setDeleteStatus(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }


  return (
    <div>
      TodoAdd
      <br />
      <TextField id="standard-basic" value={todo.userId} label="User Id" variant="standard" onChange={(event) => setTodo({...todo, userId : event.target.value})}/>
      <TextField id="standard-basic" value={todo.id} label="Id" variant="standard" onChange={(event) => setTodo({...todo, id : event.target.value})}/>
      <TextField id="standard-basic" value={todo.title} label="Title" variant="standard" onChange={(event) => setTodo({...todo, title : event.target.value})}/>
      <TextField id="standard-basic" value={todo.completed} label="Completed" variant="standard" onChange={(event) => setTodo({...todo, completed : event.target.value})}/>
      <br/>
      <Button variant="outlined" onClick={() => handleSubmit()}>Add</Button>
      <Button variant="outlined" onClick={() => handleUpdateSubmit()}>Update</Button>
      <Button variant="outlined" onClick={() => handleDeleteSubmit()}>Delete</Button>
      <br/>
      {status && <>Added/Updated Successfully</>}
      {deleteStatus && <>Deleted Successfully</>}
      {error && <>Internal Server Error</>}
    </div>
  );
}

export default TodoAdd;
