import { render, screen } from '@testing-library/react';
import React from 'react';
// import App from './App';
import Home from './page/Home';

describe('Home', () => {
  // organizes tests
  test('should render Home heading', () => {
    render(<Home />);
    const appHeading = screen.getByText('Home');
    expect(appHeading).toBeInTheDocument();
  }); // actual test that runs
});
