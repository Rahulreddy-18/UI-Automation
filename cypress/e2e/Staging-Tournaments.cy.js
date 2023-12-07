describe('Tournaments', () => {
    
    it('Verify tournament listing page(Upcoming)', () => {
    cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
    cy.contains('Upcoming').should('be.visible')
    cy.contains('Register').should('be.visible')
    });
    it('Verify tournament listing page(Live)', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.contains('Live').click();
        cy.contains('Live').should('be.visible')
        cy.contains('View Participants').should('be.visible')
    });
    it('Verify tournament listing page(Past)', () => {
        cy.visit('https://passport-staging.lysto.io/tournaments/upcoming')
        cy.contains('Past').click();
        cy.contains('Past').should('be.visible')
        cy.contains('View Results').should('be.visible')
    });
    it('Visit tournament details page(Past tournament)', () => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.get('meta[property="og:title"][content="Lysto.gg |  LYSTO UNDERDOGS (Duo)"]').should('exist');

    });
    it('Verify tournament name is visible or not', () => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.get('#Tournament_Text').should('have.text',' LYSTO UNDERDOGS (Duo)')
    });
    it('Verify Prize Pool', () => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.get('Img[src="/static/images/ic_lysto_prize.svg"]').should('be.visible')
        cy.contains('Prize Pool').should('be.visible')
        cy.contains('₹1,000').should('be.visible')
    })
    it('Verify Overview tab',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains('Overview').should('be.visible')
    })
    it('Verify Tournament Duration section',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains('TOURNAMENT DURATION').should('be.visible')
        cy.contains('November 14th 11:53 pm').should('be.visible')
        cy.contains(' - ').should('be.visible')
        cy.contains('November 24th 11:53 pm').should('be.visible')
    })
    it('Verify About the tournament section',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains('About the tournament').should('be.visible')
        cy.contains('we play bgmi').should('be.visible')
    })
    it('Verify upcoming tournaments section',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains('Upcoming Tournaments').should('be.visible')
    });
    it('Verify About the organizer section',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains("About the organizer").should('be.visible')
        cy.contains('Lysto').should('be.visible')
        cy.get('Img[src="/static/images/ic_discord_white.svg"]')
    });
    it('Verify Participants tab',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains("Participants").should('be.visible')
    });
    it('Verify teams text and total team count',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains("Participants").click()
        cy.contains("Teams").should('be.visible')
        cy.contains("3").should('be.visible')
    });
    it('Verify couple of team names is visible or not : 1) Rahulreddy18',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains("Participants").click()
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[2]/div/div/div/div[3]/div/div[1]/p').should('have.text','Rahulreddy18')
    });
    it('2) MyNewTeam',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains("Participants").click()
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[2]/div/div/div/div[4]/div/div[1]/p').should('have.text','MyNewTeam')
    });
    it('Verify results tab',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains("Results").click()
        cy.contains("Results").should('be.visible')
    });
    it('Verify clips tab',() => {
        cy.visit('https://passport-staging.lysto.io/games/bgmi-240/tournaments/-lysto-underdogs-duo-220?tab=overview')
        cy.contains("Clips").click()
        cy.contains("Clips").should('be.visible')
    });
});