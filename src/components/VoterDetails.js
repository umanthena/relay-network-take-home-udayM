import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import VoterDataSummary from './VoterDataSummary';
import { getVoterData } from '../services/VoterService';
import SegmentSummary from './SegmentSummary';
import './VoterDetails.css';

const segmentOptions = [
    {value: 'rep', label: 'Republican'},
    {value: 'dem', label: 'Democrat'},
    {value: 'other_party', label: 'Other Party'},
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
    {value: 'unknown_sex', label: 'Unknown Sex'},
    {value: 'black', label: 'Black'},
    {value: 'hispanic', label: 'Hispanic'},
    {value: 'white', label: 'White'},
    {value: 'other_race', label: 'Other Race'},
  ];

export default function VoterDetails() {
    const [rows, setRows] = useState([]);
    const [totalRow, setTotalRow] = useState(null);
    const [selectedSegment, setSelectedSegment] = useState('');

    // to fetch voter data from getVoterData service
    useEffect(() => {
        getVoterData().then((response) => {
            if (response.length) {
                // excluding last object (totals) from voter details array, since it shouldn't be included in calculating the total % by ward
                const dataRows = response.slice(0, response.length - 1);
                setRows(dataRows);
                setTotalRow(response[response.length - 1]);
              }
        });
      }, []);

      const handleSegmentSelection = (e) => {
        setSelectedSegment(e.target.value);
      };
    
      return (
        <div>
          <VoterDataSummary data={totalRow}></VoterDataSummary>
          <FormControl className="segment-select-control">
        <InputLabel id="segment-select-label">Segment</InputLabel>
        <Select
          labelId="segment-select-label"
          id="segment-select"
          value={selectedSegment}
          label="Segment"
          onChange={handleSegmentSelection}
        >
          <MenuItem value="">Select</MenuItem>
          {segmentOptions.map(segment => (
            <MenuItem value={segment.value}>{segment.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedSegment !== '' && (
        <SegmentSummary data={totalRow} segmentName={selectedSegment} />
      )}
     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
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
                  <TableCell align="center">%
                  {selectedSegment !== '' && (
                        <span className="selected-segment-percentage">
                        (% of selected segment by ward)
                        </span>
                        )}
                  </TableCell>
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
                      {(totalRow?.total && totalRow.total !== 0) ? ((row.total * 100) / totalRow.total).toFixed(2) : 0} %
                      {selectedSegment !== '' && (
                        <span className="selected-segment-percentage">
                        ({(row.total !== 0) ? ((row[selectedSegment] * 100) / row.total).toFixed(2) : 0} %)
                        </span>
                        )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
        </div>
      );
    }
