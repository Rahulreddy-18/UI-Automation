describe('Landing page',() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })
    it('Visit landing page & verify title of the page',() => {
        cy.visit('https://lysto.gg/');
        cy.title().should('eq','Lysto.gg Build your own gaming Identity');
    });
    it('Verify lysto image at top left corner', () => {
        cy.visit('https://lysto.gg/')
        cy.get('Img[src="/static/images/lysto_banner.svg"]').should('be.visible')
    })
    it('Verify heading(h1) text in top banner',() => {
        cy.visit('https://lysto.gg/');
        cy.contains("IT’S YOUR TIME").should('be.visible');
        cy.contains('TO BECOME A LEGEND').should('be.visible');
    });
    it('Verify heading(h2) text in top banner',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Win Tournaments with Prizes').should('be.visible');
        cy.contains('Over Rs. 2 Lakhs').should('be.visible');
    });
    it('Verify Register now button in top banner',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('REGISTER NOW').should('be.visible');
    });
    it('Verify tournaments text & click on tournaments in top right toolbar',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Tournament_02').should('have.text','Tournaments');
        cy.get('#Tournament_02').click({force: true});
    });
    it('Verify scrims text & click on scrims',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Popps_06').should('have.text','Scrims');
        cy.get('#Popps_06').click({force: true});
    });
    it('Verify contests text & click on contests',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Contests_05').should('have.text','Contests');
        cy.get('#Contests_05').click({force: true});
    });
    it('Verify communities text & click on communities',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Communities_03').should('have.text','Communities');
        cy.get('#Communities_03').click({force: true});
    });
    it('Verify activities text & click on activities',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Moments_04').should('have.text','Activities');
        cy.get('#Moments_04').click({force: true});
    });
    it('Verify login text & click on login button',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#login-button').should('have.text','Login');
        cy.get('#login-button').click({force: true});
    });
    it('Verify listing section is present or not',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#CarouselHomePageElement').should('be.visible');
    });
    it('Verify scrims in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Scrims are live!').should('be.visible');
        cy.contains('Grind all day and better your game!').should('be.visible');
        cy.contains('Get your team to play now; win that prize pool!').should('be.visible');
    });
    it('Verify EXPLORE SCRIMS button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Explore Scrims').click();
    });
    it('Verify communities in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Over 50+ communities').should('be.visible');
        cy.contains('Be part of the best communities').should('be.visible');
        cy.contains('Showcase. Compete. Share. Socialise.').should('be.visible');
    });
    it('Verify EXPLORE COMMUNITIES button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Explore Communities').click();
    });
    it('Verify contests in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Contests').should('be.visible');
        cy.contains('Easy contests. Big wins. Why wait?').should('be.visible');
        cy.contains('Play contests, win prizes and flex!').should('be.visible');
    });
    it('Verify EXPLORE CONTESTS button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Explore Contests').click();
    });
    it('Verify tournaments in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Your daily feed').should('be.visible');
        cy.contains('Register. Play. Win. Repeat.').should('be.visible');
        cy.contains('Prizepools worth Rs.200,000').should('be.visible');
    });
    it('Verify EXPLORE TOURNAMENTS button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Explore Tournaments').click();
    });
    it('Verify feature passports are present or not',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Profesor...').should('be.visible');
        cy.contains('adeeb-dead...').should('be.visible');
    });
    it('Verify angels text & click on angels button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Angels').should('be.visible');
        cy.contains('Angels').click();
        cy.get('.IndivualInvestorImages').should('be.visible');
    });
    it('Verify investors text & click on Investors button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('Investors').should('be.visible');
        cy.contains('Investors').click();
        cy.get('.IndivualInvestorImages').should('be.visible');
    });
    it('Verify "We are hiring!" text and "Join the team!" button', () => {
        cy.visit('https://lysto.gg/')
        cy.contains('We are hiring!').should('be.visible')
        cy.contains('Join the Team!').should('be.visible')
    })
    it('Verify footer', () => {
        cy.visit('https://lysto.gg/')
        cy.contains('Terms & Conditions').should('be.visible')
        cy.contains('Privacy Policy').should('be.visible')
    })
    it('Verify instagram image in footer', () => {
        cy.visit('https://lysto.gg/')
        cy.get('Img[src="/static/images/Instagram.svg"]').should('be.visible')
    })
    it('Verify X image in footer', () => {
        cy.visit('https://lysto.gg/')
        cy.get('Img[src="/static/images/X.svg"]').should('be.visible')
    })
    it('Verify discord image in footer', () => {
        cy.visit('https://lysto.gg/')
        cy.get('Img[src="/static/images/discord-logo-2.svg"]').should('be.visible')
    })
});

