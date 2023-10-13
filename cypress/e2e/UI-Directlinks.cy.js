describe('Direct links Test', () => {
  it('Verify landing page', () => {
  cy.visit('https://lysto.gg')
  cy.get('Img[src="/static/images/scrim_homepage.svg"]').should('be.visible');
});
it('Verify Tournament/upcoming page', () => {
  cy.visit('https://lysto.gg/tournaments/upcoming')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.xpath('//*[@id="__next"]/div/div/div/div/div[1]/div[3]/div[1]/div[2]/button/span[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]').click()
});
it('Verify Tournament/live page', () => {
  cy.visit('https://lysto.gg/tournaments/live')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.xpath('//*[@id="__next"]/div/div/div/div/div[1]/div[3]/div[1]/div[2]/button/span[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]').click()
});
it('Verify Tournament/past page', () => {
  cy.visit('https://lysto.gg/tournaments/past')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.xpath('//*[@id="__next"]/div/div/div/div/div[1]/div[3]/div[1]/div[2]/button/span[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]').click()
});
it('Verify scrims/upcoming page', () => {
  cy.visit('https://lysto.gg/scrims/upcoming')
  cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]')
})
it('Verify scrims/live page', () => {
  cy.visit('https://lysto.gg/scrims/live')
  cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]')
})
it('Verify scrims/past page', () => {
  cy.visit('https://lysto.gg/scrims/past')
  cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]')
})
it('Verify communities page', () => {
  cy.visit('https://lysto.gg/communities')
  cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div/div[1]/div/div/div/ul/li[2]/div/div').should('be.visible');
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
