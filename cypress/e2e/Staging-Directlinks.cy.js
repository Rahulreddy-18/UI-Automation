describe('Direct links', () => {
  it('Verify landing page', () => {
  cy.visit('https://passport-staging.lysto.io/')
  cy.contains('Participate and win').should('be.visible');
  cy.title().should('eq',"Lysto.gg | The Ultimate Gamers' Network")
});
it('Verify Tournament/upcoming page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('Register').should('be.visible')
});
it('Verify Tournament/live page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/live')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('View Participants').should('be.visible')
});
it('Verify Tournament/past page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/past')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('View Results').should('be.visible')
});
it('Verify scrims/upcoming page', () => {
  cy.visit('https://passport-staging.lysto.io/scrims/upcoming')
  cy.contains('Register').should('be.visible')
})
it('Verify scrims/live page', () => {
  cy.visit('https://passport-staging.lysto.io/scrims/live')
  cy.contains('Slots').should('be.visible')
})
it('Verify scrims/past page', () => {
  cy.visit('https://passport-staging.lysto.io/scrims/past')
  cy.contains('View Results').should('be.visible')
})
it('Verify communities page', () => {
cy.visit('https://passport-staging.lysto.io/communities')
cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/div/ul/li[2]/div/div').should('be.visible');
});
it('Verify activities page', () => {
  cy.visit('https://passport-staging.lysto.io/activities')
  cy.get('Img[src="/static/images/desktopMomentBanner.png"]').should('be.visible')
});
it('Verify quest page', () => {
  cy.visit('https://passport-staging.lysto.io/contests')
  cy.contains('LOGIN TO PARTICIPATE').should('be.visible')
  cy.contains('Win Contests Everyday').should('be.visible')
});
});
