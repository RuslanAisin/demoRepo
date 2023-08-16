describe('template spec', () => {
  it('passes', () => {
    cy.wrap(Cypress.env())
    cy.log('**name:** ' + Cypress.env());
    console.log(Cypress.env())
    cy.visit('https://www.google.com/');
    cy.get('textarea[type="search"]').type('1')
  });
  it('has valid env values', () => {
  expect(Cypress.env())
    .to.be.an('object')
    .and.to.include.keys('person', 'location')
  cy.wrap(Cypress.env('person'))
    .should('have.keys', 'name', 'age')
    .its('age')
    .should('be.within', 10, 99)
  cy.log('**name:** ' + Cypress.env('person').name)
  cy.log('**city:** ' + Cypress.env('location').city)
  // save a screenshot of the test runner
  // to show what the env values were
  cy.screenshot('env', { capture: 'runner' })
});
});
