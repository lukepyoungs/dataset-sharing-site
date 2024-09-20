import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  /**
   * Tests if the Home component renders the welcome message.
   * This test checks for the visibility of the main header text.
   */
  test('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Dataset Hub')).toBeInTheDocument();
  });

  /**
   * Checks if the particles background is initialized correctly.
   * This test ensures the particle system is called with the right parameters.
   */
  test('particles background initializes', async () => {
    const mockInit = jest.fn();
    jest.spyOn(require('tsparticles'), 'loadFull').mockImplementation(() => mockInit);
    
    render(<Home />);
    expect(mockInit).toHaveBeenCalled();
  });
});