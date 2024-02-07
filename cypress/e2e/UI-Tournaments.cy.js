describe('Tournaments', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    it('Verify tournament listing page(Upcoming)', () => {
    cy.visit('https://lysto.gg/tournaments/upcoming')
    cy.contains('Upcoming').should('be.visible')
    });
    it('Verify tournament listing page(Live)', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.contains('Live').click();
        cy.contains('Live').should('be.visible')
    });
    it('Verify tournament listing page(Past)', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.contains('Past').click();
        cy.contains('Past').should('be.visible')
    });
    it('Visit tournament details page(Past tournament)', () => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.get('meta[property="og:title"][content="Lysto.gg | TRAGIC ESPORTS BGMI SHOWDOWN CUP S1 "]').should('exist');
    });
    it('Verify tournament name is visible or not', () => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.get('#Tournament_Text').should('have.text','TRAGIC ESPORTS BGMI SHOWDOWN CUP S1 ')
    });
    it('Verify Prize Pool', () => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.get('Img[src="/static/images/ic_lysto_prize.svg"]').should('be.visible')
        cy.contains('Prize Pool').should('be.visible')
        cy.contains('₹ 50,000').should('be.visible')
    })
    it('Verify Overview tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('Overview').should('be.visible')
    })
    it('Verify Tournament Duration section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('TOURNAMENT DURATION').should('be.visible')
        cy.contains('August 27th 12:00 pm').should('be.visible')
        cy.contains(' - ').should('be.visible')
        cy.contains('September 18th 11:59 pm').should('be.visible')
    })
    it('Verify About the tournament section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('About the tournament').should('be.visible')
        cy.contains('Calling all gamers! Join us for the #BGMI50K tournament - an intense battle of strategy, skill, and luck. Get ready to prove your gaming prowess and take home the grand prize! ').should('be.visible')
    })
    it('Verify upcoming tournaments section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('Upcoming Tournaments').should('be.visible')
    });
    it('Verify About the organizer section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("About the organizer").should('be.visible')
        cy.contains('TRAGIC ESPORTS').should('be.visible')
        cy.get('Img[src="/static/images/ic_discord_white.svg"]')
    });
    it('Verify Participants tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("Participants").should('be.visible')
    });
    it('Verify teams text and total team count',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("Participants").click()
        cy.contains("Teams").should('be.visible')
        cy.contains("419").should('be.visible')
    });
    it('Verify one of the team name and team members: HAVOK ESPORTS',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("Participants").click()
        cy.contains("HAVOK ESPORTS").should('be.visible')
        cy.contains("HAVOK彡sToRmOP").should('be.visible')
    });
    it(' Verify Announcements section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("Participants").click()
        cy.contains("Announcements").should('be.visible')
        cy.contains("No announcements to show").should('be.visible')
    });
    it('Verify results tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("Results").click()
        cy.contains("Results").should('be.visible')
    });
    it('Verify clips tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("Clips").click()
        cy.contains("Clips").should('be.visible')
    });
});