describe('Scene Render', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/synth');
    cy.viewport(1920, 975);
  });

  it('should be rendered on http://localhost:3000/synth', () => {
    cy.url().should('eq', 'http://localhost:3000/synth');
  });

  it('should render the effects section', () => {
    cy.get('section').get('.effects-section').should('be.visible');
  });

  it('should render the keyboard', () => {
    cy.get('div').get('.keyboard').should('be.visible');
  });

  it('should render the dolphin', () => {
    cy.get('div')
      .get('.dolphin-container')
      .should('have.css', 'position', 'absolute');
    cy.get('div')
      .get('.dolphin-container')
      .get('img')
      .should('have.css', 'position', 'relative');
  });

  it('should render the main section', () => {
    cy.get('main').get('.main').should('have.css', 'z-index', '-100');
  });

  it('should move the dolphin when the value changes', () => {
    cy.get('[name="lpfilter"]:input').as('filter');
    cy.get('.dolphin-container').as('dolphin');
    cy.get('@dolphin').invoke('attr', 'style').as('position1');
    cy.get('@filter')
      .should('have.value', 1200)
      .invoke('val', 10000)
      .trigger('change');
    cy.get('@dolphin').invoke('attr', 'style').as('position2');
    cy.get('@position1').then((position1) => {
      cy.get('@position2').should('not.eq', position1);
    });
  });
});
