describe('Landing page',() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })
    it('Visit landing page & verify title of the page',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.title().should('eq',"Lysto.gg | The Ultimate Gamers' Network");
    });
    it('Verify lysto image at top left corner', () => {
        cy.visit('https://passport-staging.lysto.io/')
        cy.xpath('//*[@id="__next"]/section/div/div[1]/div[1]/div/div[1]/span/img').should('be.visible')
    })
    it('Verify tournaments text & click on tournaments in top right toolbar',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.get('#Tournament_02').should('have.text','Tournaments');
        cy.get('#Tournament_02').click({force: true});
    });
    it('Verify scrims text & click on scrims',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.get('#Popps_06').should('have.text','Scrims');
        cy.get('#Popps_06').click({force: true});
    });
    it('Verify contests text & click on contests',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.get('#Contests_05').should('have.text','Contests');
        cy.get('#Contests_05').click({force: true});
    });
    it('Verify communities text & click on communities',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.get('#Communities_03').should('have.text','Communities');
        cy.get('#Communities_03').click({force: true});
    });
    it('Verify login text & click on login button',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.get('#login-button').should('have.text','Login');
        cy.get('#login-button').click({force: true});
    });
    it('Verify listing section is present or not',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.get('#CarouselHomePageElement').should('be.visible');
    });
    it('Verify scrims in listing section',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Scrims are live!').should('be.visible');
        cy.contains('Grind all day and better your game!').should('be.visible');
        cy.contains('Get your team to play now; win that prize pool!').should('be.visible');
    });
    it('Verify EXPLORE SCRIMS button',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Explore Scrims').click();
    });
    it('Verify communities in listing section',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Over 50+ communities').should('be.visible');
        cy.contains('Be part of the best communities').should('be.visible');
        cy.contains('Showcase. Compete. Share. Socialise.').should('be.visible');
    });
    it('Verify EXPLORE COMMUNITIES button',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Explore Communities').click();
    });
    it('Verify contests in listing section',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Contests').should('be.visible');
        cy.contains('Easy contests. Big wins. Why wait?').should('be.visible');
        cy.contains('Play contests, win prizes and flex!').should('be.visible');
    });
    it('Verify EXPLORE CONTESTS button',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Explore Contests').click();
    });
    it('Verify tournaments in listing section',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Your daily feed').should('be.visible');
        cy.contains('Register. Play. Win. Repeat.').should('be.visible');
        cy.contains('Prizepools worth Rs.200,000').should('be.visible');
    });
    it('Verify EXPLORE TOURNAMENTS button',() => {
        cy.visit('https://passport-staging.lysto.io/');
        cy.contains('Explore Tournaments').click();
    });
    it('Verify footer', () => {
        cy.visit('https://passport-staging.lysto.io/')
        cy.contains('Terms & Conditions').should('be.visible')
        cy.contains('Privacy Policy').should('be.visible')
    })
    it('Verify instagram image in footer', () => {
        cy.visit('https://passport-staging.lysto.io/')
        cy.get('Img[src="/static/images/Instagram.svg"]').should('be.visible')
    })
    it('Verify X image in footer', () => {
        cy.visit('https://passport-staging.lysto.io/')
        cy.get('Img[src="/static/images/X.svg"]').should('be.visible')
    })
    it('Verify discord image in footer', () => {
        cy.visit('https://passport-staging.lysto.io/')
        cy.get('Img[src="/static/images/discord-logo-2.svg"]').should('be.visible')
    })
});

