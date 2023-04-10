import { expect, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { mockServer } from '../src/mocks/server';

expect.extend(matchers);

beforeAll(() => mockServer.listen());

afterEach(() => {
  cleanup();
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});
