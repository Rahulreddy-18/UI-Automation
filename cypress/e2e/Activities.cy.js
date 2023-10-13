describe('Activities suite', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
      it('Should Login from activities page & post text/image/video', () => {
      // Visit landing page
        cy.visit('https://passport-staging.lysto.io');
      //Click on activities
        cy.contains('Activities').click({ force: true});
        cy.wait(5000);
      //Login through discord
      cy.get('#login-button').click({force: true});
      cy.get('Img[src="/static/images/login_discord_icon.svg"]').click();
      cy.origin('https://discord.com', () => {
      //cy.get('a.logoutLink-mirmUT').click();
      cy.get('input[type="text"]').type('rahul.b@lysto.io');
      cy.get('input[type="password"]').type('Rahulreddy');
      cy.contains('Log In').click();
      cy.contains('Authorize').click();
      cy.wait(25000);
      });
      //Post text
      cy.get('#Post').click();
      cy.get('#Select_game').type('Axie');
      cy.get('.dropdown-menu > :nth-child(1)').click();
      cy.get('#Input_caption').type("Helloooo!");
      cy.get('#Post-Button-one').click();
      cy.wait(5000);
      //Post image
      cy.get('#Post').click();
      cy.get('#Select_game').type('Axie');
      cy.get('.dropdown-menu > :nth-child(1)').click();
      cy.get('#Input_caption').type("pubg_banner");
      cy.get('#image-upload-feed').attachFile('Pubg_Banner.jpg'); 
      cy.get('#Post-Button-Two').click();
      cy.wait(5000);
      //Post video
      cy.get('#Post').click();
      cy.get('#Select_game').type('Axie');
      cy.wait(2000);
      cy.get('.dropdown-menu > :nth-child(1)').click();
      cy.get('#Input_caption').type("BGMI_Video");
      cy.get('#image-upload-feed').attachFile('BGMI_Comeback.mp4'); 
      cy.wait(10000);
      cy.contains('POST').click();
      cy.wait(30000);
    });
});