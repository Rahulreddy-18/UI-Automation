describe('About-Us Page',() => {
    it('Visit About-Us Page & click on login button',() => {
        cy.visit('https://passport-staging.lysto.io/about-us');
        cy.contains('Login').click()
        cy.contains('Connect your account').should('be.visible')
        });
    it('Verify Tournaments CTA in top bar',() => { 
        cy.visit('https://passport-staging.lysto.io/about-us');
        cy.contains('Tournaments').should('be.visible')
        cy.get('#Tournament_02').click()
        cy.title().should('eq','Tournaments on Lysto : Building Gamers')
    })
    it('Verify Scrims CTA in top bar',() => { 
        cy.visit('https://passport-staging.lysto.io/about-us');
        cy.contains('Scrims').should('be.visible')
        cy.get('#Popps_06').click()
        cy.contains('Register').should('be.visible')
    })        
    it('Verify Contests CTA in top bar',() => { 
        cy.visit('https://passport-staging.lysto.io/about-us');
        cy.contains('Contests').should('be.visible')
        cy.get('#Contests_05').click()
        cy.contains('Win Contests Everyday').should('be.visible')
    }) 
    it('Verify Communities CTA in top bar',() => { 
        cy.visit('https://passport-staging.lysto.io/about-us');
        cy.contains('Tournaments').should('be.visible')
        cy.get('#Communities_03').click()
        cy.contains('Top Communities').should('be.visible')
    }) 
    it('Verify heading(h1) text in top banner',() => {
        cy.visit('https://passport-staging.lysto.io/about-us');
        cy.contains('Compete. Connect. Win').should('be.visible')
    });
    it('Verify heading(h2) text in top banner',() => {
        cy.visit('https://passport-staging.lysto.io/about-us');
        cy.contains("Lysto is a gamer's network, empowering players to build and showcase their gaming creds as they train, challenge and compete, find teams and communities and win rewards, all while playing the games they love.").should('be.visible')
    });
    it('Verify "We are hiring!" section',() => {
        cy.visit('https://passport-staging.lysto.io/about-us')
        cy.contains('We are hiring!').should('be.visible')
        cy.contains('Join the Team!').should('be.visible')
        cy.contains('Join the Team!').click()
    })
    it('Verify angels text & click on angels button',() => {
    cy.visit('https://passport-staging.lysto.io/about-us');
    cy.contains('Angels').should('be.visible')
    cy.contains('Angels').click();
    cy.get('.IndivualInvestorImages').should('be.visible');
    });
    it('Verify investors text & click on Investors button',() => {
    cy.visit('https://passport-staging.lysto.io/about-us');
    cy.contains('Investors').should('be.visible')
    cy.contains('Investors').click();
    cy.get('.InvestorImages').should('be.visible');
    });
});

