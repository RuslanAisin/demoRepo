describe('template spec', () => {
  it('has valid env values', () => {
    expect(Cypress.env())
      .to.be.an('object')
      .and.to.include.keys('login', 'password');
    cy.log('**login:** ' + Cypress.env('login'))
    cy.log('**password:** ' + Cypress.env('password'))
    cy.visit('https://www.google.com/');
    cy.get('textarea[type="search"]').type(Cypress.env('login'));
    cy.screenshot('env', { capture: 'runner' })
});
});
