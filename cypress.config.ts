import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      coverage(on, config);
      return config;
    },
  },

  video: false,

  screenshotOnRunFailure: false,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
