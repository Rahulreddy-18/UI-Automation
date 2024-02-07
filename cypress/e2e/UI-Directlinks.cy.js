describe('Direct links Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('Verify landing page link', () => {
  cy.visit('https://lysto.gg')
  cy.contains('Participate and win').should('be.visible');
  cy.title().should('eq',"Lysto.gg | The Ultimate Gamers' Network")
});
it('Verify public profile page link', () => {
  cy.visit('https://lysto.gg/passport/Rahulreddy')
  cy.contains('About me').should('be.visible')
  cy.get('#about_me').should('have.text','BGMI - ACE Master {5190841496}.')
});
it('Verify tournament/upcoming page link', () => {
  cy.visit('https://lysto.gg/tournaments/upcoming')
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('Register').should('be.visible')
});
it('Verify tournament/live page link', () => {
  cy.visit('https://lysto.gg/tournaments/live')
  cy.wait(12000)
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('View Participants').should('be.visible')
});
it('Verify tournament/past page link', () => {
  cy.visit('https://lysto.gg/tournaments/past')
  cy.wait(12000)
  cy.title().should('eq','Tournaments on Lysto : Building Gamers')
  cy.contains('View Results').should('be.visible')
});
it('Verify tournament details page link', () => {
  cy.visit('https://lysto.gg/games/pubg-mobile-48/tournaments/bloody-challenge-by-bloody-brand-int-2155?tab=overview')
  cy.title().should('eq','Lysto.gg | BLOODY CHALLENGE by Bloody Brand Int.')
  cy.contains('Prize Distribution').should('be.visible')
});

it('Verify scrims/upcoming page link', () => {
  cy.visit('https://lysto.gg/scrims/upcoming')
  cy.contains('Register').should('be.visible')
})
it('Verify scrims/live page link', () => {
  cy.visit('https://lysto.gg/scrims/live')
  cy.contains('Slots').should('be.visible')
})
it('Verify scrims/past page link', () => {
  cy.visit('https://lysto.gg/scrims/past')
  cy.contains('View Results').should('be.visible')
})
it('Verify scrim details page link', () => {
  cy.visit('https://lysto.gg/games/FREEFIRE/scrim/solo-clash-m1-gp-code-3398')
  cy.title().should('eq','Lysto.gg | Solo Clash M1 (GP CODE)')
  cy.contains('Round 1').should('be.visible')
})

it('Verify communities page link', () => {
  cy.visit('https://lysto.gg/communities')
  cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[3]/div/p[1]').should('be.visible');
});
it('Verify community details page link', () => {
  cy.visit('https://lysto.gg/communities/metanomy-1')
  cy.contains('Player driver next-gen esports. Earn rewards while gaming, creating and upscaling towards a career in gaming sports.').should('be.visible');
});
it('Verify contests page link', () => {
  cy.visit('https://lysto.gg/contests')
  cy.contains('LOGIN TO PARTICIPATE').should('be.visible')
  cy.contains('Win Contests Everyday').should('be.visible')
});
it('Verify about-us page link', () => {
  cy.visit('https://lysto.gg/about-us')
  cy.contains('Compete. Connect. Win').should('be.visible')
});
it('Verify terms and conditions page link', () => {
  cy.visit('https://lysto.gg/terms-and-conditions')
  cy.contains('A. SCOPE').should('be.visible')
});
it('Verify privacy policy page link', () => {
  cy.visit('https://lysto.gg/privacy-policy')
  cy.contains('1. TYPES OF DATA WE COLLECT').should('be.visible')
});
});
