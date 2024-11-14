import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Id, title, content, created_at, updated_at) {
  return { Id, title, content, created_at, updated_at };
}

const rows = [
  createData(
    1,
    "House cleaning",
    "Need to clean house ",
    "2024-12-1",
    "2024-12-1"
  ),
  createData(
    1,
    "House cleaning",
    "Need to clean house ",
    "2024-12-1",
    "2024-12-1"
  ),
  createData(
    1,
    "House cleaning",
    "Need to clean house ",
    "2024-12-1",
    "2024-12-1"
  ),
  createData(
    1,
    "House cleaning",
    "Need to clean house ",
    "2024-12-1",
    "2024-12-1"
  ),
  createData(
    1,
    "House cleaning",
    "Need to clean house ",
    "2024-12-1",
    "2024-12-1"
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Updated at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
