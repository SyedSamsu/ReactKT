import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "./Table";

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const headers = {'Content-Type': 'application/json', 'HTTP_TOKEN':'asdasd'}
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/`,{headers :headers})
      .then((response) => {
        setTodos(response.data)})
      .catch((error) => console.log(error));

    // const requestOptions = {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json', 'HTTP_TOKEN':'asdasd'},
    // }
    // fetch('https://jsonplaceholder.typicode.com/todos',requestOptions)
    // .then(response =>response.json())
    // .then(json => setTodos(json))
    // .catch((error) => console.log(error))
  }, []);

  return (
    <div>
      TodosList
      <Table todos={todos}/>
    </div>
  );
}

export default TodosList;
