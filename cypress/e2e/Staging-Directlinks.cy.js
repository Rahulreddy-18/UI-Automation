describe('LandingPage Test', () => {
  it('Verify landing page', () => {
  cy.visit('https://passport-staging.lysto.io/')
  cy.get('Img[src="/static/images/scrim_homepage.svg"]').should('be.visible');
});
it('Verify Tournament/upcoming page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
  cy.xpath('//*[@id="__next"]/div/div/div/div/div[1]/div[3]/div[1]/div[2]/button/span[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]').click()
});
it('Verify Tournament/live page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/live')
  cy.xpath('//*[@id="__next"]/div/div/div/div/div[1]/div[3]/div[1]/div[2]/button/span[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]').click()
});
it('Verify Tournament/past page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/past')
  cy.xpath('//*[@id="__next"]/div/div/div/div/div[1]/div[3]/div[1]/div[2]/button/span[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]').click()
});
it('Verify scrims/upcoming page', () => {
  cy.visit('https://passport-staging.lysto.io/scrims/upcoming')
  cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]')
})
it('Verify scrims/live page', () => {
  cy.visit('https://passport-staging.lysto.io/scrims/live')
  cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]')
})
it('Verify scrims/past page', () => {
  cy.visit('https://passport-staging.lysto.io/scrims/past')
  cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div/img').click()
  cy.get('Img[src="/static/images/ic_close.svg"]')
})
it('Verify communities page', () => {
cy.visit('https://passport-staging.lysto.io/communities')
cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/div/div[1]/div/div/div/ul/li[2]/div/div').should('be.visible');
});
it('Verify activities page', () => {
  cy.visit('https://passport-staging.lysto.io/activities')
  cy.get('Img[src="/static/images/desktopMomentBanner.png"]').should('be.visible')
});
it('Verify quest page', () => {
  cy.visit('https://passport-staging.lysto.io/quest')
  cy.contains('LOGIN TO PARTICIPATE').should('be.visible')
  cy.contains('Win Contests Everyday').should('be.visible')
});
});
