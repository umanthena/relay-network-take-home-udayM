import React, { useEffect, useState } from 'react';
import './VoterDataSummary.css';
import { getFullName } from './SegmentName';

export default function VoterDataSummary(props) {
    const [totals, setTotals] = useState([]);
    const [topSegment, setTopSegment] = useState({name: '', label: '', value: 0, percentage: 0});
  
    // defining values that need to be printed for the top category summary section
    useEffect(() => {
      const totalArr = [];
      if (props.data) {
        Object.keys(props.data).forEach(dataKey => {
          totalArr.push({
            name: dataKey,
            label: getFullName(dataKey),
            value: props.data[dataKey]
          });
        });
      }
      setTotals(totalArr);
    }, [props.data]);
  
    // finding the top segment
    useEffect(() => {
      if(totals.length === 0){
        return;
      }
      let topObj = null;
      let topVal = 0;
      let grandTotal = 0;
      totals.forEach(totalObj => {
        if (totalObj.name !== 'total') {
          if (totalObj.value > topVal) {
            topVal = totalObj.value;
            topObj = {...totalObj};
          }
        } else {
          grandTotal = totalObj.value;
        }
      });
      // calculating % of total votes for top segment
      topObj.percentage = ((topObj.value * 100) / grandTotal).toFixed(2);
      setTopSegment(topObj);
    }, [totals]);

  return (
    <div className='summary'>
        <div data-testid="top-segment-label"><b>Top Segment of All Voters:</b> {topSegment.label} - {topSegment.value} - {topSegment.percentage}%</div>
    </div>
  );
}
