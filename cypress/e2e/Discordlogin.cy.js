// Discord login
describe('Login suite', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

    it('Discord Login', () => {
      // Visit landing page
      cy.visit('https://passport-staging.lysto.io');
      //Click on login
      cy.get('#login-button').click({force: true});
      cy.get('Img[src="/static/images/ic_login_discord_icon.svg"]').click({force: true});
      cy.origin('https://discord.com', () => {
      //cy.get('a.logoutLink-mirmUT').click();
      cy.get('input[type="text"]').type('rahul.b@lysto.io');
      cy.get('input[type="password"]').type('Rahulreddy');
      cy.contains('Log In').click();
      cy.contains('Authorize').click();
      cy.wait(15000);
    });
    });
    });