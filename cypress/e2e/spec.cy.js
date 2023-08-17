describe('template spec', () => {
  it('has valid env values', () => {
    expect(Cypress.env())
      .to.be.an('object')
      .and.to.include.keys('login', 'password');
    cy.log('**login:** ' + Cypress.env('login'))
    cy.log('**password:** ' + Cypress.env('password'))
    cy.visit('https://hh.ru/account/login');
    cy.get('[data-qa="expand-login-by-password"]').should('be.visible').click()
    cy.get('[data-qa="login-input-username"]').type(Cypress.env('login'));
    // cy.screenshot('env', { capture: 'runner' })
});
});
