import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

function TodoView() {
  const [id, setId] = useState();

  const [todo, setTodo] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
      HTTP_TOKEN: "asdasd",
    };
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        setError(false);
        setTodo(response.data);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div>
      TodoView
      <TextField
        label="id"
        id="fullWidth"
        vaule={id}
        onChange={(event) => setId(event.target.value)}
      />
      <Button variant="outlined" onClick={() => handleSubmit()}>
        Search
      </Button>
      <Typography>Selected Id : {id}</Typography>
      <h3>{!error && JSON.stringify(todo)}</h3>
      <h3>{error && <>Please Enter valid input </>}</h3>
    </div>
  );
}

export default TodoView;
