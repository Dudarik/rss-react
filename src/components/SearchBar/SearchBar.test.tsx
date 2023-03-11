import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';
import React from 'react';

describe('<SearchBar />', () => {
  test('SearchBar mounts properly', () => {
    const wrapper = render(<SearchBar />);
    expect(wrapper).toBeTruthy();
  });

  test('SearchBar handler onChange', async () => {
    render(<SearchBar />);

    const inputString = 'Hello world';

    const inputField = screen.getByPlaceholderText('input search string');

    await userEvent.type(inputField, inputString);

    expect(inputField).toHaveValue(inputString);
  });

  test('SearchBar handler onclick', async () => {
    render(<SearchBar />);

    const inputString = 'Hello world';

    const inputField = screen.getByPlaceholderText('input search string');

    // await userEvent.type(inputField, inputString);

    expect(inputField).toHaveValue(inputString);

    const searchBtn = screen.getByTitle('search');

    await userEvent.click(searchBtn);

    expect(inputField).toHaveValue('');
  });
});
