import { expect, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { mockServer } from '../src/mocks/server';

import { store } from '../src/store';
import { api } from '../src/slices/apiSlice';

import { Request } from 'node-fetch';

type TRequest = typeof global.Request & typeof Request;

global.Request = Request as TRequest;

expect.extend(matchers);

beforeAll(() => mockServer.listen());

afterEach(() => {
  cleanup();
  mockServer.resetHandlers();
  store.dispatch(api.util.resetApiState());
});

afterAll(() => {
  mockServer.close();
});
