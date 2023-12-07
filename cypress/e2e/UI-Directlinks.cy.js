describe('Direct links Test', () => {
  it('Verify landing page', () => {
  cy.visit('https://lysto.gg')
  cy.contains('Participate and win').should('be.visible');
});
it('Verify Tournament/upcoming page', () => {
  cy.visit('https://lysto.gg/tournaments/upcoming')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('Register').should('be.visible')
});
it('Verify Tournament/live page', () => {
  cy.visit('https://lysto.gg/tournaments/live')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('View Participants').should('be.visible')
});
it('Verify Tournament/past page', () => {
  cy.visit('https://lysto.gg/tournaments/past')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('View Results').should('be.visible')
});
it('Verify scrims/upcoming page', () => {
  cy.visit('https://lysto.gg/scrims/upcoming')
  cy.contains('Register').should('be.visible')
})
it('Verify scrims/live page', () => {
  cy.visit('https://lysto.gg/scrims/live')
  cy.contains('Slots').should('be.visible')
})
it('Verify scrims/past page', () => {
  cy.visit('https://lysto.gg/scrims/past')
  cy.contains('View Results').should('be.visible')

})
it('Verify communities page', () => {
  cy.visit('https://lysto.gg/communities')
  cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[2]/div/p[1]').should('be.visible');
});
it('Verify activities page', () => {
  cy.visit('https://lysto.gg/activities')
  cy.get('Img[src="/static/images/desktopMomentBanner.png"]').should('be.visible')
});
it('Verify quest page', () => {
  cy.visit('https://lysto.gg/contests')
  cy.contains('LOGIN TO PARTICIPATE').should('be.visible')
  cy.contains('Win Contests Everyday').should('be.visible')
});
});
