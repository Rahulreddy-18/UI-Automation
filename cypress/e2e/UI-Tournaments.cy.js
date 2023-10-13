describe('Tournaments', () => {
    
    it('Verify tournament listing page(Upcoming)', () => {
    cy.visit('https://lysto.gg/tournaments/upcoming')
    cy.get('#Upcoming').should('have.text','Upcoming')
    });
    it('Verify tournament listing page(Live)', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('#Live').click();
        cy.get('#Live').should('have.text','Live')
    });
    it('Verify tournament listing page(Past)', () => {
        cy.visit('https://lysto.gg/tournaments/upcoming')
        cy.get('#Past').click();
        cy.get('#Past').should('have.text','Past')
    });
    it('Visit tournament details page(Past tournament)', () => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.title().should('eq','Lysto.gg | TRAGIC ESPORTS BGMI SHOWDOWN CUP S1')
    });
    it('Verify tournament name is visible or not', () => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.get('#Tournament_Text').should('have.text','TRAGIC ESPORTS BGMI SHOWDOWN CUP S1 ')
        //cy.get('Img[src="https://passport-general-public.s3-ap-south-1.amazonaws.com/images/tournament/banner/7e7cf959-068d-4985-b2f6-478c4df6060d/IMG-20230706-WA0055.jpg"]').should('be.visible');
    });
    it('Verify Prize Pool', () => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.get('Img[src="/static/images/trophyCircle.svg"]').should('be.visible')
        cy.contains('Prize Pool').should('be.visible')
        cy.contains('₹50,000').should('be.visible')
    })
    it('Verify Overview tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[1]').click()
        cy.contains('Overview').should('be.visible')
    })
    it('Verify Tournament Duration section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('Tournament Duration').should('be.visible')
        cy.contains('August 27th ● 12:00 pm').should('be.visible')
        cy.contains(' ➜ ').should('be.visible')
        cy.contains('September 18th ● 11:59 pm').should('be.visible')
    })
    it('Verify About the tournament section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('About the tournament').should('be.visible')
        cy.contains('Calling all gamers! Join us for the #BGMI50K tournament - an intense battle of strategy, skill, and luck. Get ready to prove your gaming prowess and take home the grand prize! ').should('be.visible')
    })
    it('Verify Watch LIVE Streaming Now text',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('Watch LIVE Streaming Now').should('be.visible')
    })
    it('Verify upcoming tournaments section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains('Upcoming Tournaments').should('be.visible')
        cy.xpath('//*[@id="__next"]/section/div/div[2]/div[2]/div/div[6]/div').should('be.visible')
    });
    it('Verify There"s a lot more! section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("There's a lot more!").should('be.visible')
        cy.xpath('//*[@id="__next"]/section/div/div[2]/div[2]/div/div[7]/div').should('be.visible')
    });
    it('Verify About the organizer section',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.contains("About the organizer").should('be.visible')
        cy.contains('TRAGIC ESPORTS').should('be.visible')
        cy.get('Img[src="/static/images/ic_discord_white.svg"]')
    });
    it('Verify Participants tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[2]').click()
        cy.contains("Participants").should('be.visible')
    });
    it('Verify teams text and total team count',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[2]').click()
        cy.contains("Teams").should('be.visible')
        cy.contains("419").should('be.visible')
    });
    it('Verify some random team names and team members: 1)HAVOK ESPORTS',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[2]').click()
        cy.contains("HAVOK ESPORTS").should('be.visible')
        cy.contains("811672109918").should('be.visible')
        cy.contains("HAVOK彡sToRmOP").should('be.visible')
    });
    it('2)ICONIC GAMERS',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[2]').click()
        cy.contains("ICONIC GAMERS").should('be.visible')
        cy.contains("55571493473").should('be.visible')
    });
    it('3)Earthquake  ',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[2]').click()
        cy.contains("Earthquake ").should('be.visible')
        cy.contains("5122816946").should('be.visible')
    });
    it('Verify results tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[3]').click()
        cy.contains("Results").should('be.visible')
    });
    it('Verify clips tab',() => {
        cy.visit('https://lysto.gg/games/bgmi-295/tournaments/tragic-esports-bgmi-showdown-cup-s1-60')
        cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div/div[2]/div/div/div/p[4]').click()
        cy.contains("Clips").should('be.visible')
    });
});