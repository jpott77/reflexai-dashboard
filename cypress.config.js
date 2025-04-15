const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/tests/**/*.js',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
    reporter: 'mocha-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'spec',
    },
  },
  env: {
    SNAPSHOT_BASE_DIRECTORY: 'cypress/snapshots/base',
    SNAPSHOT_DIFF_DIRECTORY: 'cypress/snapshots/diff',
    ALWAYS_GENERATE_DIFF: true,
  },
});
