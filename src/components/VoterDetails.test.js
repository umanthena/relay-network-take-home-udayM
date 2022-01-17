import { render, screen } from '@testing-library/react';
import VoterDetails from './VoterDetails';

test('validate unique element ids of VoterDetails component', () => {
  render(<VoterDetails />);
  const testId1 = screen.getByTestId('segment-select-label')
  const testId2 = screen.getByTestId('voter-details-section')
  expect(testId1).toBeInTheDocument();
  expect(testId2).toBeInTheDocument();
});
