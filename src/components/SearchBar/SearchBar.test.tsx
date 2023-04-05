import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchBar from '.';
import React from 'react';

const setSearchString = vi.fn();
const handlerSubmitBtnClick = vi.fn();
const searchString = '';

describe('<SearchBar />', () => {
  test('SearchBar mounts properly', () => {
    const wrapper = render(
      <SearchBar {...{ searchString, setSearchString, handlerSubmitBtnClick }} />
    );
    expect(wrapper).toBeTruthy();
  });

  // test('SearchBar handler onChange', async () => {
  //   render(<SearchBar {...{ searchString, setSearchString, handlerSubmitBtnClick }} />);

  //   const inputString = 'Hello world';

  //   const inputField = screen.getByPlaceholderText('input search string');

  //   await userEvent.type(inputField, inputString);

  //   expect(inputField).toHaveValue(inputString);
  // });
});
