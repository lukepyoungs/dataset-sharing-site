import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Navigation', () => {
  /**
   * Verifies that navigation to different routes works as expected.
   * This test checks if the Home page is rendered when navigating to the root URL.
   */
  test('renders Home component at "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome to Dataset Hub')).toBeInTheDocument();
  });
});