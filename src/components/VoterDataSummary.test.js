import { render, screen } from '@testing-library/react';
import VoterDataSummary from './VoterDataSummary';

test('validate unique element ids of VoterDetails component', () => {
  render(<VoterDataSummary />);
  const testId = screen.getByTestId('top-segment-label')
  expect(testId).toBeInTheDocument();
});
