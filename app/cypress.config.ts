import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5174',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },
  video: false,
  screenshotOnRunFailure: false,
});
