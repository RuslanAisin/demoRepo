describe('template spec', () => {
  it('passes', () => {
    cy.wrap(Cypress.env('search'))
    cy.log('**name:** ' + Cypress.env('search'));
    cy.visit('https://www.google.com/');
    cy.get('textarea[type="search"]').type(search)
  })
})
