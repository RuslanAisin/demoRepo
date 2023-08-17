describe('template spec', () => {
  it('has valid env values', () => {
    expect(Cypress.env())
      .to.be.an('object')
      .and.to.include.keys('login', 'password');
    // cy.log('**login:** ' + Cypress.env('login'))
    // cy.log('**password:** ' + Cypress.env('password'));
    cy.log('Перехожу на HH');
    // cy.on('window:before:load', (win) => {
    //   console.log('WINDOW BEFORE LOAD', win.location.href);
    //   if (win.location.href === 'https://hh.ru/?hhtmFrom=account_login') {
    //   win.stop()
    // }
    // });
    
    cy.visit('https://hh.ru/account/login');
    cy.log('нажимаю кнопку ввести пароль');
    cy.get('[data-qa="expand-login-by-password"]').should('be.visible').click();
    cy.log('ввожу логин');
    cy.get('[data-qa="login-input-username"]').type(Cypress.env('login'), {log: false});
    cy.log('ввожу пароль');
    cy.get('[data-qa="login-input-password"]').type(Cypress.env('password'), {log: false});
    cy.log('жму войти');
    cy.get('[data-qa="account-login-submit"]').click();
    cy.scrollTo('top');
    cy.screenshot('env', { capture: 'runner' });
    // const loadScript = '<script> setTimeout(() => location.reload(), 1000); </script>';
    // cy.get('body').invoke('append', loadScript);
    cy.log('переход в мои резюме');
    cy.wait(60000);
    cy.get('[data-qa="mainmenu_myResumes"]').should('be.visible').click({ force: true });
    cy.screenshot('my_resume', { capture: 'runner' });
    cy.log('поднять резюме');
    cy.get('[data-qa="resume-update-button_actions"]').should('be.visible').click({ force: true });
    cy.wait(5000);
    cy.log('успех');
    cy.screenshot('ok', { capture: 'runner' });
});
});
