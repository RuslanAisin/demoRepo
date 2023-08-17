const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if (Cypress.config('hideXHR')) {
        const app = window.top;

        if (
          app &&
          !app.document.head.querySelector('[data-hide-command-log-request]')
        ) {
          const style = app.document.createElement('style');
          style.innerHTML =
            '.command-name-request, .command-name-xhr { display: none }';
          style.setAttribute('data-hide-command-log-request', '');

          app.document.head.appendChild(style);
        }
      }
    },
  },
});
