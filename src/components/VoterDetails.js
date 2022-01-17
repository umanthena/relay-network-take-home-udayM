import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function VoterDetails() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ward</TableCell>
            <TableCell align="center">Republican</TableCell>
            <TableCell align="center">Democrat</TableCell>
            <TableCell align="center">Other Party</TableCell>
            <TableCell align="center">Male</TableCell>
            <TableCell align="center">Female</TableCell>
            <TableCell align="center">Unknown Sex</TableCell>
            <TableCell align="center">Black</TableCell>
            <TableCell align="center">Hispanic</TableCell>
            <TableCell align="center">White</TableCell>
            <TableCell align="center">Other Race</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
