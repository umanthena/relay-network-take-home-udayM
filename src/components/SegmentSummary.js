import React, { useEffect, useState } from 'react';
import './SegmentSummary.css';

export default function SegmentSummary(props) {
  const [totals, setTotals] = useState([]);
  const [segmentData, setSegmentData] = useState({name: '', label: '', value: 0, percentage: 0});

  useEffect(() => {
    const totalArr = [];
    if (props.data) {
      Object.keys(props.data).forEach(dataKey => {
        totalArr.push({
          name: dataKey,
          label: dataKey,
          value: props.data[dataKey]
        });
      });
    }
    setTotals(totalArr);
  }, [props.data]);

  // get selected segment label, total votes and %
  useEffect(() => {
    if (totals.length === 0 || !props.segmentName) {
      return;
    }
    let seletedObj = null;
    let grandTotal = 0;
    totals.forEach(totalObj => {
      if (totalObj.name !== 'total') {
        if(totalObj.value && typeof totalObj.value === 'number'){
          grandTotal = grandTotal + totalObj.value;
        }
        if (totalObj.name === props.segmentName) {
          seletedObj = {...totalObj};
        }
      }
    });
    // calculate % of selected segment by taking grandTotal of votes
    seletedObj.percentage = ((seletedObj.value * 100) / grandTotal).toFixed(2);
    setSegmentData(seletedObj);
  }, [totals, props.segmentName]);

  return (
    <div className="segment-summary">
        <div data-testid="selected-segment-details"><b>Selected segment:</b> {segmentData.label} - {segmentData.value} - {segmentData.percentage}%</div>
    </div>
  );
}
