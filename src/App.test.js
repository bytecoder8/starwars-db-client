import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/starwars/i);
  expect(textElement).toBeInTheDocument();
});
