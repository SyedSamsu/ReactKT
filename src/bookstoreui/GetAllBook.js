import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookAction } from "../redux/action/BookStoreAction";
import { ERROR_GETALL, LOADING_GETALL, SUCCESS_GETALL } from "../redux/action/ActionTypes";

function GetAllBook() {
  const allBooks = useSelector((state) => state.allbook.books);
  const loading = useSelector((state) => state.allbook.loading)
  const errorStatus = useSelector((state) => state.allbook.error.status)
  const errorMessage = useSelector(state => state.allbook.error.message)
  const dispatch = useDispatch();

  useEffect(() => {
    const headers = { "Content-Type": "application/json", HTTP_TOKEN: "ALLOW" };
    axios
      .get(`http://localhost:9090/v1/bookstore/getAllBook`,{headers:headers})
      .then((response) => {
        dispatch(getAllBookAction( LOADING_GETALL,null));
        dispatch(getAllBookAction(SUCCESS_GETALL,response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getAllBookAction(ERROR_GETALL,error.message));
      });
  },[]);

  return (
    <div>
      {loading && !errorStatus && <>LOADING</>}
      {!loading && !errorStatus && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Book Name</TableCell>
                <TableCell align="right">Book Description</TableCell>
                <TableCell align="right">Book Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allBooks &&
                allBooks.map((row) => {
                  const { id, bookName, bookDescription, bookRating } = row;
                  return (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {id}
                      </TableCell>
                      <TableCell align="right">{bookName}</TableCell>
                      <TableCell align="right">{bookDescription}</TableCell>
                      <TableCell align="right">{bookRating}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {!loading && errorStatus && <>{errorMessage}</>}
    </div>
  );
}

export default GetAllBook;
