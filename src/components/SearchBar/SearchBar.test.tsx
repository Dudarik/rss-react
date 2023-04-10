import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

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
});
