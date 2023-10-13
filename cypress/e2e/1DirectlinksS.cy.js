describe('LandingPage Test', () => {
  it('Verify landing page', () => {
  cy.visit('https://passport-staging.lysto.io/')
});
it('Verify Tournament/upcoming page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
});
it('Verify Tournament/live page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/live')
});
it('Verify Tournament/past page', () => {
  cy.visit('https://passport-staging.lysto.io/tournaments/past')
});
it('Verify communities page', () => {
cy.visit('https://passport-staging.lysto.io/communities')
});
it('Verify activities page', () => {
  cy.visit('https://passport-staging.lysto.io/activities')
});
it('Verify quest page', () => {
  cy.visit('https://passport-staging.lysto.io/quest')
});
});
