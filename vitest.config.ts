/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

const exclude = [
  '**/node_modules/**',
  '**/dist/**',
  '**/src/interfaces/**',
  '**/cypress/**',
  '**/.{idea,git,cache,output,temp}/**',
  '**/src/helpers/validators**',
  '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
  '**/*.d.ts',
  '**/main.tsx',
];

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    exclude,
    coverage: {
      provider: 'c8',
      all: true,
      reporter: 'text',
      exclude,
    },
  },
});
