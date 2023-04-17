import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import SearchBar from '.';
import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../../store';

describe('<SearchBar />', () => {
  test('SearchBar mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
