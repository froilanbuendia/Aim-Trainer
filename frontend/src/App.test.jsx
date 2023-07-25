import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  // organizes tests
  test('should render Aim Trainer App heading', () => {
    render(<App />);
    const appHeading = screen.getByText('Aim Trainer App');
    expect(appHeading).toBeInTheDocument();
  }); // actual test that runs
});
