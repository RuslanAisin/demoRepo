describe('template spec', () => {
  it('passes', () => {
    cy.wrap(Cypress.env())
    cy.log('**name:** ' + Cypress.env());
    cy.visit('https://www.google.com/');
    cy.get('textarea[type="search"]').type('1')
  })
})
