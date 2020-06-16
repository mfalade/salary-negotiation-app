describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=value-input]').as('valueInput');
    cy.get('[data-cy=submit-button]').as('submitButton');
    cy.get('[data-cy=form-wrapper]').as('formWrapper');
    cy.get('.nav-item a')
      .first()
      .as('employeeTab');
    cy.get('.nav-item a')
      .last()
      .as('employerTab');
  });

  it('implements correct tab behavior', () => {
    // Renders and focuses number input on load
    cy.contains('Salary Negotiation App');
    cy.get('@valueInput')
      .should('be.visible')
      .should('have.focus');

    // Prevents submission on empty value
    cy.get('@submitButton').click();
    cy.get('@formWrapper').should('be.visible');

    // enables submit when user provides a value
    cy.get('@valueInput').type(42);
    cy.get('@submitButton').click();
    cy.get('@formWrapper').should('not.be.visible');
    cy.get('[data-cy=confirmation-message]').should('be.visible');
  });

  it(`shows success message when conditions align`, () => {
    cy.get('@employeeTab').click();
    cy.get('@valueInput').type(4200);

    cy.get('@submitButton').click();

    cy.get('@employerTab').click();
    cy.get('@valueInput').type(5000);
    cy.get('@submitButton').click();

    cy.get('[data-cy=resultPanel]')
      .should('be.visible')
      .should('contain.text', 'Success!');
  });

  it(`shows failure message when conditions don't align`, () => {
    cy.get('@employeeTab').click();
    cy.get('@valueInput').type(5000);

    cy.get('@submitButton').click();

    cy.get('@employerTab').click();
    cy.get('@valueInput').type(4000);
    cy.get('@submitButton').click();

    cy.get('[data-cy=resultPanel]')
      .should('be.visible')
      .should('contain.text', 'Failure!');
  });

  it(`shows modal with weather in London`, () => {
    cy.get('@employeeTab').click();
    cy.get('@valueInput').type(5000);

    cy.get('@submitButton').click();

    cy.get('@employerTab').click();
    cy.get('@valueInput').type(4000);
    cy.get('@submitButton').click();

    cy.get('[data-cy=weather-display]')
      .should('be.visible')
      .should('contain.text', 'Current weather in')
      .should('contain.text', 'Temperature');
  });

  it(`resets app state when reset button is hit`, () => {
    cy.get('@employeeTab').click();
    cy.get('@valueInput').type(5000);

    cy.get('@submitButton').click();

    cy.get('@employerTab').click();
    cy.get('@valueInput').type(4000);
    cy.get('@submitButton').click();
    cy.get('button.close').click();
    cy.get('[data-cy=reset-button]').click();

    cy.get('@valueInput')
      .should('be.visible')
      .should('have.focus')
      .should('have.value', '');
  });
});
