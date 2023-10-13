describe('Dynamic Left Toolbar', () => {
    it('Verify lysto logo is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/lysto_logo.svg"]').should('be.visible')
    });
    it('Verify tournament icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_tournament.svg"]').should('be.visible')
        cy.get('#Tournament_id').should('have.text','Tournaments')
    });
    it('Verify scrims icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/igl.png"]').should('be.visible')
        cy.get('#Scrim_id').should('have.text','Scrims')
    });
    it('Verify contests icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/celebration.svg"]').should('be.visible')
        cy.get('#Quests_id').should('have.text','Contests')
    });
    it('Verify communities icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_community.svg"]').should('be.visible')
        cy.get('#Communities_id').should('have.text','Communities')
    });
    it('Verify activities icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/momentIcon.svg"]').should('be.visible')
        cy.get('#Moments_id').should('have.text','Activities')
    });
});