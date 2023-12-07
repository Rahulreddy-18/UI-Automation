describe('Scrims page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      it('Verify upcoming tab & text', () => {
        cy.visit('https://lysto.gg/scrims/live');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[1]').click();
        cy.contains('Upcoming').should('be.visible');
      });
      it('Verify that Register button should be visible in upcoming scrims page', () => {
        cy.visit('https://lysto.gg');
        cy.get('#Popps_06').click({force:true});
        cy.contains('Register').should('be.visible')
      });
      it('Verify Live Tab & text', () => {
        cy.visit('https://lysto.gg/scrims/upcoming');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[2]').click();
        cy.contains('Live').should('be.visible');
      });
      it('Verify that Slots text should be visible in live scrims page', () => {
        cy.visit('https://lysto.gg');
        cy.get('#Popps_06').click({force:true});
        cy.contains('Slots').should('be.visible')
     });
      it('Verify Past Tab & text', () => {
        cy.visit('https://lysto.gg/scrims/upcoming');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[3]').click();
        cy.contains('Past').should('be.visible')
     });
     it('Verify that View Results button should be visible in past scrims page', () => {
      cy.visit('https://lysto.gg');
      cy.get('#Popps_06').click({force:true});
      cy.contains('Past').click()
      cy.contains('Results Awaited').should('be.visible')
   });
   it('Visit scrims details page & verify page title', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.title().should('eq','Lysto.gg | Lysto Scrim 1');
  });
  it('Verify text in rules section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Testing scrims, please join. ').should('be.visible');
  });
  it('Verify all prizes in prize section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Prize').click();
    cy.contains('1st Prize').should('be.visible');
  });
  it('Click on one team and verify all team members present or not in slots list section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Slot list').click();
    cy.contains('Waitlist (5)').click();
    cy.wait(3000);
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[2]/div[2]/div/div/div[2]/div[3]/div/div[1]/p').should('have.text','Tech Team');
  });
  it('Verify confirmed tab in slot list tab', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75')
    cy.contains('Slot list').click()
    cy.contains('No participants to show').should('be.visible')
  })
  it('Verify results section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Results').click();
    cy.contains('Results are yet to be declared !!!').should('be.visible');
  });
});