import {
  Table as TB, TableBody, TableCell, TableContainer, TableHead,
  TableRow
} from "@mui/material";
import React from "react";

function Table(props) {
  return (
    <div>

    
      <TableContainer>
        <TB>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>UserId</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.todos &&
              props.todos.map((row) => {
                const {id, userId, title, completed} = row;
                const result = completed === true ? "True" : "False";
                return (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{userId}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{result}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </TB>
      </TableContainer>
    </div>
  );
}

export default Table;
