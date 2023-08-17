describe('template spec', () => {
  it('has valid env values', () => {
    expect(Cypress.env())
      .to.be.an('object')
      .and.to.include.keys('login', 'password');
    cy.log('**login:** ' + Cypress.env('login'))
    cy.log('**password:** ' + Cypress.env('password'));
    cy.log('Перехожу на HH');
    cy.visit('https://hh.ru/account/login');
    cy.log('нажимаю кнопку ввести пароль');
    cy.get('[data-qa="expand-login-by-password"]').should('be.visible').click();
    cy.log('ввожу логин');
    cy.get('[data-qa="login-input-username"]').type(Cypress.env('login'));
    cy.log('ввожу пароль');
    cy.get('[data-qa="login-input-password"]').type(Cypress.env('password'));
    cy.log('жму войти');
    cy.get('[data-qa="account-login-submit"]').click();
    cy.scrollTo('top');
    cy.screenshot('env', { capture: 'runner' })
});
});
