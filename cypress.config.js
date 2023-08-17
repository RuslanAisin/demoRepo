const { defineConfig } = require("cypress");

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
module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        const width = 2400
        const height = 1500
        console.log('setting the browser window size to', width, height);
        if (browser.name === 'chrome') {
          launchOptions.args.push(`--window-size=${width},${height}`)
          launchOptions.args.push('--force-device-scale-factor=1')
        };
        return launchOptions;
      })
    },
  },
});
