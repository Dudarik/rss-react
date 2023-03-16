/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/src/interfaces/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/*.d.ts',
      '**/main.tsx',
    ],
    coverage: {
      provider: 'c8',
      all: true,
      reporter: 'text',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/src/interfaces/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        '**/*.d.ts',
        '**/main.tsx',
      ],
    },
  },
});
