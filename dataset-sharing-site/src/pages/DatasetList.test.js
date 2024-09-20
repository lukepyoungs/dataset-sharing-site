import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DatasetList from './DatasetList';
import axios from 'axios';
jest.mock('axios');


describe('DatasetList Component', () => {
  /**
   * Tests if the DatasetList component fetches and displays datasets.
   * This test mocks an API response and checks for dataset names in the document.
   */
  test('displays datasets after fetching', async () => {
    const datasets = [{ _id: '1', name: 'Test Dataset', description: 'Test Desc', link: '#' }];
    axios.get.mockResolvedValue({ data: datasets });

    render(<DatasetList />);
    await waitFor(() => expect(screen.getByText('Test Dataset')).toBeInTheDocument());
  });

  /**
   * Edge case: Checks component behavior when no datasets are returned from API.
   * This test ensures no cards are rendered when the dataset list is empty.
   */
  test('handles empty dataset list', async () => {
    axios.get.mockResolvedValue({ data: [] });

    render(<DatasetList />);
    await waitFor(() => expect(screen.queryByText('Download')).not.toBeInTheDocument());
  });
});