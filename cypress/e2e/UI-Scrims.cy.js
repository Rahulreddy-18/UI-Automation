describe('Scrims page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      it('Verify upcoming tab & text', () => {
        cy.visit('https://lysto.gg/scrims/live');
        cy.get('#Upcoming').click();
        cy.get('#Upcoming').should('have.text','Upcoming');
      });
      it('Verify share link of upcoming scrims', () => {
        cy.visit('https://lysto.gg');
        cy.get('#Popps_06').click({force:true});
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/img').click()
        cy.get('Img[src="/static/images/ic_close.svg"]')
      });
      it('Verify Live Tab & text', () => {
        cy.visit('https://lysto.gg/scrims/upcoming');
        cy.get('#Live').click();
        cy.get('#Live').should('have.text','Live');
      });
      it('Verify share link of live scrims', () => {
        cy.visit('https://lysto.gg');
        cy.get('#Popps_06').click({force:true});
        cy.get('#Live').click();
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/img').click()
        cy.get('Img[src="/static/images/ic_close.svg"]')
     });
      it('Verify Past Tab & text', () => {
        cy.visit('https://lysto.gg/scrims/upcoming');
        cy.get('#Past').click();
        cy.get('#Past').should('have.text','Past')
     });
     it('Verify share link of past scrims', () => {
      cy.visit('https://lysto.gg');
      cy.get('#Popps_06').click({force:true});
      cy.get('#Past').click();
      cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/img').click()
      cy.get('Img[src="/static/images/ic_close.svg"]')
   });
   it('Visit scrims details page & verify page title', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.title().should('eq','Lysto.gg | Lysto Scrim 1');
  });
  it('Verify text in rules section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[1]/p').should('have.text','Testing scrims, please join. ');
  });
  it('Verify all prizes in prize section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Prize').click();
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[1]/p').should('have.text','1st Prize');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/p').should('have.text','2nd Prize');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[3]/p').should('have.text','3rd Prize');
  });
  it('Click on one team and verify all team members present or not in Participants section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Participants').click();
    cy.contains('Tech Team').click();
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[1]/div[2]/p').should('have.text','naveen-gg');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[2]/div[2]/p').should('have.text','RedBaron');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[3]/div[2]/p').should('have.text','Rahulreddy');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[4]/div[2]/p').should('have.text','Kuldeep8');
  });
  it('Click on one team and verify all team members present or not in Participants section', () => {
    cy.visit('https://lysto.gg/games/BGMI/scrim/lysto-scrim-1-75');
    cy.contains('Results').click();
    cy.contains('#1').click();
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[1]/div[2]/p').should('have.text','naveen-gg');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[2]/div[2]/p').should('have.text','RedBaron');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[3]/div[2]/p').should('have.text','Rahulreddy');
    cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[3]/div[2]/div[2]/div[4]/div[2]/p').should('have.text','Kuldeep8');
  });
});