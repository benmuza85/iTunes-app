import { render, screen } from '@testing-library/react';
import App from './App';

test('renders iTunes Search App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/iTunes Search App/i);
  expect(headingElement).toBeInTheDocument();
});
