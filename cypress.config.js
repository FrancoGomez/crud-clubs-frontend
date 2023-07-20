/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');
const { FRONTEND_URL } = require('./env-test');

module.exports = defineConfig({
  e2e: {
    baseUrl: FRONTEND_URL,
  },
  chromeWebSecurity: false,
});
