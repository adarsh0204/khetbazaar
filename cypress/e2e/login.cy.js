describe('KhetBazaar UI Testing', () => {

  it('Login using email (OTP flow)', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[type="email"]').type('test@gmail.com');

    cy.contains('Send OTP').click();

    cy.contains('OTP');
  });

  it('Homepage loads correctly', () => {
    cy.visit('http://localhost:5173');

    cy.contains('Khet Bazaar');
  });

  it('Navigate to login page', () => {
    cy.visit('http://localhost:5173');

    cy.contains('Login').click();

    cy.url().should('include', '/login');
  });

  it('Navigate to register page', () => {
    cy.visit('http://localhost:5173');

    cy.contains('Register').click();

    cy.url().should('include', '/register');
  });

});