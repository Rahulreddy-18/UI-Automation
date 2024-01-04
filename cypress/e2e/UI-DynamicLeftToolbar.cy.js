describe('Dynamic Left Toolbar', () => {
    it('Verify lysto logo is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/lysto_logo.svg"]').should('be.visible')
    });
    it('Verify tournament icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/scrims/upcoming')
        cy.get('Img[src="/static/images/ic_tournament_1_enabled.svg"]').should('be.visible')
        cy.contains('Tournaments').should('be.visible')
    });
    it('Verify scrims icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_mountain_flag.svg"]').should('be.visible')
        cy.contains('Scrims').should('be.visible')
    });
    it('Verify contests icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_badge.svg"]').should('be.visible')
        cy.contains('Contests').should('be.visible')
    });
    it('Verify communities icon and text is visible in toolbar', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_groups_1.svg"]').should('be.visible')
        cy.contains('Communities').should('be.visible')
    })
});