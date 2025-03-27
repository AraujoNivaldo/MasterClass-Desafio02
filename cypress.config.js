const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    env: {
      apiUrl: "https://serverest.dev",

    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
