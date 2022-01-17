import { render, screen } from '@testing-library/react';
import SegmentSummary from './SegmentSummary';

test('validate unique element ids of VoterDetails component', () => {
  render(<SegmentSummary />);
  const testId = screen.getByTestId('selected-segment-details')
  expect(testId).toBeInTheDocument();
});
