describe('About', () => {
  beforeEach(() => {
    cy.wait(4000);
    cy.visit('/about');
  });

  it('Should be at /about path', () => {
    cy.url().should('include', '/about');
  });

  it('Should display directions on how to use app', () => {
    cy.get("[data-cy='how-to']").children("[data-cy='list-item']");
  });

  it('Should have clickable link to synth', () => {
    cy.get('.to-synth').click();
  });

  it('Should list contributors', () => {
    cy.get("[data-cy='contributors']").children("[data-cy='contributor']");
  });

  it('Should redirect user to contributors github when clicked', () => {
    cy.get("[data-cy='contributors']")
      .children("[data-cy='contributor']")
      .click()
      .should('have.attr', 'href', 'https://github.com/Patfindley')
      .should('have.attr', 'target', '_blank');
  });
});
