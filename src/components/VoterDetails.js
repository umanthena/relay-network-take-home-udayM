import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getVoterData } from '../services/VoterService';

export default function VoterDetails() {
    const [rows, setRows] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);

    // to fetch voter data from getVoterData service
    useEffect(() => {
        getVoterData().then((response) => {
          setRows(response);
        });
      }, []);

      useEffect(() => {
        let total = 0;
        rows.forEach((row) => {
          total = total + row.total;
        })
        setGrandTotal(total);
      }, [rows]);

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
            {rows.map((row) => (
            <TableRow
            key={row.ward}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.ward}
            </TableCell>
            <TableCell align="center">{row.rep}</TableCell>
            <TableCell align="center">{row.dem}</TableCell>
            <TableCell align="center">{row.other_party}</TableCell>
            <TableCell align="center">{row.male}</TableCell>
            <TableCell align="center">{row.female}</TableCell>
            <TableCell align="center">{row.unknown_sex}</TableCell>
            <TableCell align="center">{row.black}</TableCell>
            <TableCell align="center">{row.hispanic}</TableCell>
            <TableCell align="center">{row.white}</TableCell>
            <TableCell align="center">{row.other_race}</TableCell>
            <TableCell align="center">{row.total}</TableCell>
            <TableCell align="center">
              {grandTotal !== 0 ? ((row.total * 100) / grandTotal).toFixed(2) : 0} %
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
