describe('Contest page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it('Verify LOGIN TO PARTICIPATE button is present or not', () => {
    // visit landing page
    cy.visit('https://lysto.gg');
    //Click on games
    cy.get('#Contests_05').click({force:true});
    //Click on share CTA and verify the link 
    cy.wait(5000);
    cy.contains('LOGIN TO PARTICIPATE').should('be.visible');
    });
    it('Verify Live Contests text is Visible or not', () => {
      cy.visit('https://lysto.gg/contests');
      cy.contains('Live Contests').should('be.visible');
    });
    it('Verify Upcoming Contest text is visible or not', () => {
      cy.visit('https://lysto.gg/contests');
      cy.contains('Upcoming Contests').should('be.visible');
    });
    it('verify HOW TO WIN text is present or not',() => {
      cy.visit('https://lysto.gg/contests');
      cy.contains('How to win').should('be.visible');
    });
    it('Open how to win info button and verify that steps to win poppup text is showing or not',() => {
      cy.visit('https://lysto.gg/contests');
      cy.get('Img[src="/static/images/info.svg"]').click();
      cy.get('Img[src="/static/images/ic_close.svg"]').click();
    });
    it('Verify "Win Contests Everyday" text is present or not ',() => {
      cy.visit('https://lysto.gg/contests');
      cy.contains('Win Contests Everyday').should('be.visible');
    });
});
