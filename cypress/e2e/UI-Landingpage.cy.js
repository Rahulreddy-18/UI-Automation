describe('Landing page',() => {
    it('Visit landing page & verify title of the page',() => {
        cy.visit('https://lysto.gg/');
        cy.title().should('eq','Lysto.gg Build your own gaming Identity');
    });
    it('Verify heading(h1) text in top banner',() => {
        cy.visit('https://lysto.gg/');
        cy.xpath('//*[@id="__next"]/section/div/div[2]/div/section[1]/div/div/div[1]/div/div[1]/div[1]/p[1]').should('have.text', "World's first gamer profile creator is here! Make yours now.");
    });
    it('Verify heading(h2) text in top banner',() => {
        cy.visit('https://lysto.gg/');
        cy.xpath('//*[@id="__next"]/section/div/div[2]/div/section[1]/div/div/div[1]/div/div[1]/div[1]/p[2]').should('have.text', "Claim your gamer name to unlock a profile, tournaments, contests & more.");
    });
    it('Type username and verify login popup is opening or not after clicking on claim',() => {
        cy.visit('https://lysto.gg/');
        cy.get('[id=":r1:"]').type('Rahul');
        cy.wait(2000);
        cy.contains('CLAIM').click();
        cy.wait(6000);
        cy.get('.MuiPaper-root > .css-rfnosa').should('be.visible');
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
        cy.get('#login-button').should('have.text','LOGIN');
        cy.get('#login-button').click({force: true});
    });
    it('Verify listing section is present or not',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#CarouselHomePageElement').should('be.visible');
    });
    it('Verify scrims in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[1]/div/div[1]/div[1]/p').should('have.text','Scrims are live!');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[1]/div/div[1]/div[2]/p').should('have.text','Grind all day and better your game!');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[1]/div/div[1]/div[3]/p').should('have.text','Get your team to play now; win that prize pool!');
        cy.get('Img[src="/static/images/scrim_homepage.svg"]').should('be.visible');
    });
    it('Verify EXPLORE SCRIMS button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('EXPLORE SCRIMS').click();
    });
    it('Verify communities in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[2]/div/div[1]/div[1]/p').should('have.text','Over 50+ communities');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[2]/div/div[1]/div[2]/p').should('have.text','Be part of the best communities');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[2]/div/div[1]/div[3]/p').should('have.text','Showcase. Compete. Share. Socialise.');
        cy.get('Img[src="/static/images/desktopCommunityImage.png"]').should('be.visible');
    });
    it('Verify EXPLORE COMMUNITIES button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('EXPLORE COMMUNITIES').click();
    });
    it('Verify contests in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[3]/div/div[1]/div[1]/p').should('have.text','Contests');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[3]/div/div[1]/div[2]/p').should('have.text','Easy contests. Big wins. Why wait?');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[3]/div/div[1]/div[3]/p').should('have.text','Play contests, win prizes and flex!');
        cy.get('Img[src="/static/images/carouselStaticImage1.png"]').should('be.visible');
    });
    it('Verify EXPLORE CONTESTS button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('EXPLORE CONTESTS').click();
    });
    it('Verify tournaments in listing section',() => {
        cy.visit('https://lysto.gg/');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[4]/div/div[1]/div[1]/p').should('have.text','BGMI, Freefire & other tournaments');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[4]/div/div[1]/div[2]/p').should('have.text','Register. Play. Win. Repeat.');
        cy.xpath('/html/body/div[1]/section/div/div[2]/div/section[4]/div/div[4]/div/div[1]/div[3]/p').should('have.text','Prizepools worth Rs.200,000');
        cy.get('Img[src="/static/images/carouselStaticImage3.png"]').should('be.visible');
    });
    it('Verify EXPLORE TOURNAMENTS button',() => {
        cy.visit('https://lysto.gg/');
        cy.contains('EXPLORE TOURNAMENTS').click();
    });
    it('Verify feature passports are present or not',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Feature_pass_id').should('have.text','FEATURED PASSPORTS');
        cy.contains('Profesor').should('be.visible');
        cy.xpath('//*[@id="__next"]/section/div/div[2]/div/section[4]/div/div[2]/div/div[1]').should('be.visible');
    });
    it('Verify angels text & click on angels button',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Angels_id').should('have.text','Angels');
        cy.get('#Angels_id').click();
        cy.get('.IndivualInvestorImages').should('be.visible');
    });
    it('Verify investors text & click on Investors button',() => {
        cy.visit('https://lysto.gg/');
        cy.get('#Investor_id').should('have.text',' Investors');
        cy.get('#Investor_id').click();
        cy.get('.IndivualInvestorImages').should('be.visible');
    });
});

