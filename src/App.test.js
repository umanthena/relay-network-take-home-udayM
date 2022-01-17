import { render, screen } from '@testing-library/react';
import App from './App';

test('Validate unique element ids', () => {
  render(<App />);
  const testId = screen.getByTestId('page-label')
  expect(testId).toBeInTheDocument();
});
