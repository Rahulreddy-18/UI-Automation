describe('Dynamic Left Toolbar', () => {
    it('Verify lysto logo is visible in toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/lysto_logo.svg"]').should('be.visible')
    });
    it('Verify tournament icon and text is visible in toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_tournament_1_enabled.svg"]').should('be.visible')
        cy.xpath('/html/body/div[1]/div/section/div/div[1]/div/div/div/div/div/div/ul/div[2]/li[1]/p').should('have.text','Tournaments')
    });
    it('Verify scrims icon and text is visible in toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_mountain_flag.svg"]').should('be.visible')
        cy.xpath('/html/body/div[1]/div/section/div/div[1]/div/div/div/div/div/div/ul/div[2]/li[2]/p').should('have.text','Scrims')
    });
    it('Verify contests icon and text is visible in toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_badge.svg"]').should('be.visible')
        cy.xpath('/html/body/div[1]/div/section/div/div[1]/div/div/div/div/div/div/ul/div[2]/li[3]/p').should('have.text','Contests')
    });
    it('Verify communities icon and text is visible in toolbar', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.get('Img[src="/static/images/ic_groups_1.svg"]').should('be.visible')
        cy.xpath('/html/body/div[1]/div/section/div/div[1]/div/div/div/div/div/div/ul/div[2]/li[4]/p').should('have.text','Communities')
    })
});