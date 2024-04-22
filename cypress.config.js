const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //viewportWidth: 660,
    //viewportHeight: 550,
    baseUrl: 'http://www.automationpractice.pl/index.php',
    experimentalStudio: true

  },
});
