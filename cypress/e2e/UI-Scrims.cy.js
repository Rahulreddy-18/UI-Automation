describe('Scrims page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      it('Verify upcoming tab & text', () => {
        cy.visit('https://lysto.gg/scrims/live');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[1]').click();
        cy.contains('Upcoming').should('be.visible');
      });
      it('Verify share link of upcoming scrims', () => {
        cy.visit('https://lysto.gg');
        cy.get('#Popps_06').click({force:true});
        cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div/img').click()
        cy.get('Img[src="/static/images/ic_close.svg"]')
      });
      it('Verify Live Tab & text', () => {
        cy.visit('https://lysto.gg/scrims/upcoming');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[2]').click();
        cy.contains('Live').should('be.visible');
      });
      it('Verify share link of live scrims', () => {
        cy.visit('https://lysto.gg');
        cy.get('#Popps_06').click({force:true});
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[2]').click();
        cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div/img').click()
        cy.get('Img[src="/static/images/ic_close.svg"]')
     });
      it('Verify Past Tab & text', () => {
        cy.visit('https://lysto.gg/scrims/upcoming');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[3]').click();
        cy.contains('Past').should('be.visible')
     });
     it('Verify share link of past scrims', () => {
      cy.visit('https://lysto.gg');
      cy.get('#Popps_06').click({force:true});
      cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/p[3]').click();
      cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div/img').click()
      cy.get('Img[src="/static/images/ic_close.svg"]')
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
    cy.contains('2nd Prize').should('be.visible');
    cy.contains('3rd Prize').should('be.visible');
  });
  it('Click on one team and verify all team members present or not in Participants section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Slot list').click();
    cy.contains('Tech Team').click();
    cy.contains('RedBaron').should('be.visible');
    cy.contains('naveen-gg').should('be.visible');
    cy.contains('Rahulreddy').should('be.visible');
    cy.contains('Kuldeep8').should('be.visible');
  });
  it('Click on one team and verify all team members present or not in results section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Results').click();
    cy.contains('#1').click();
    cy.contains('RedBaron').should('be.visible');
    cy.contains('naveen-gg').should('be.visible');
    cy.contains('Rahulreddy').should('be.visible');
    cy.contains('Kuldeep8').should('be.visible');
  });
});