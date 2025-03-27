const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    env: {
      webUrl: "https://alexandreti-aut.github.io/",
      apiUrl: "https://serverest.dev",

    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
