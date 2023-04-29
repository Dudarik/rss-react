/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

const exclude = [
  '**/node_modules/**',
  '**/dist/**',
  '**/src/interfaces/**',
  '**/cypress/**',
  '**/.{idea,git,cache,output,temp}/**',
  '**/src/helpers/validators**',
  '**/instrumented/**',
  '**/src/__tests__/**',
  '**/.nyc_output/**',
  '**/coverage/**',
  '**/src/config**',
  '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
  '**/*.d.ts',
  '**/entry-client.tsx',
  '**/entry-server.tsx',
  '**/server.ts',
];

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
      exclude,
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3001,
  },
});
