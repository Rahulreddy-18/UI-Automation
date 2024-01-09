describe('Dynamic Left Toolbar', () => {
    it('Verify that the lysto logo should be visible on the toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/lysto_logo.svg"]').should('be.visible')
    });
    it('Click on the lysto logo and verify that the user should redirect to landing page', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/lysto_logo.svg"]').click();
        cy.title().should('eq',"Lysto.gg | The Ultimate Gamers' Network")
        cy.contains('Participate and win').should('be.visible')
    });
    it('Verify that the tournament icon and text should be visible on the toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/scrims/upcoming')
        cy.get('Img[src="/static/images/ic_tournament_1_enabled.svg"]').should('be.visible')
        cy.contains('Tournaments').should('be.visible')
    });
    it('Click on the "Tournaments" and verify that the user should redirect to Tournament upcoming page', () => {
        cy.visit('https://passport-staging.lysto.io/scrims/upcoming')
        cy.xpath('//*[@id="Tournament_id"]/button').click()
        cy.title().should('eq','Tournaments on Lysto : Building Gamers')
        cy.contains('Register').should('be.visible')
    });
    it('Verify that the scrims icon and text should be visible on the toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_mountain_flag.svg"]').should('be.visible')
        cy.contains('Scrims').should('be.visible')
    });
    it('Click on the "Scrims" and verify that the user should redirect to scrims upcoming page', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.xpath('//*[@id="Scrim_id"]/button').click()
        cy.contains('Register').should('be.visible')
    });
    it('Verify that the contests icon and text should be visible on the toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_badge.svg"]').should('be.visible')
        cy.contains('Contests').should('be.visible')
    });
    it('Click on the "Contests" and verify that the user should redirect to contests page', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.xpath('//*[@id="Quests_id"]/button').click()
        cy.contains('LOGIN TO PARTICIPATE').should('be.visible')
        cy.contains('Win Contests Everyday').should('be.visible')
    });
    it('Verify that the communities icon and text should be visible on the toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_groups_1.svg"]').should('be.visible')
        cy.contains('Communities').should('be.visible')
    })
    it('Click on the "Communities" and verify that the user should redirect to communities page', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.xpath('//*[@id="Communities_id"]/button').click()
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[3]/div/p[1]').should('be.visible');
    });
});