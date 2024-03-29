describe('Communities page',() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    it('Visit communities listing page and verify Top communities text is visible or not',() => {
    cy.visit('https://lysto.gg/communities');
    cy.contains('Top Communities').should('be.visible');
    });
    it('Verify 09 configured communities are present are not in listing page: 1) Deepwoken ',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[29]/div/p[1]').should('be.visible');
        cy.contains('Deepwoken').should('be.visible');
    });
    it('2) One Nation Esport... ',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[11]/div/p[1]').should('be.visible');
    });
    it('3) Teenager Esports ',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[15]/div/p[1]').should('be.visible');
        cy.contains('Teenager Esports').should('be.visible');
    });
    it('4) Black Revengers',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[24]/div/p[1]').should('be.visible');
        cy.contains('Black Revengers').should('be.visible');
    });
    it('5) Nookazon',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[45]/div/p[1]').should('be.visible');
        cy.contains('Nookazon').should('be.visible');
    });
    it('6) PUBG MOBILE',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[48]/div/p[1]').should('be.visible');
        cy.contains('PUBG MOBILE').should('be.visible');
    });
    it('7) Valorant',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[49]/div/p[1]').should('be.visible');
        cy.contains('Valorant').should('be.visible');
    });
    it('8) Villager Esports',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[62]/div/p[1]').should('be.visible');
        cy.contains('Villager Esports').should('be.visible');
    });
    it('9) Metanomy',() => {
        cy.visit('https://lysto.gg/communities');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/div/div[63]/div/p[1]').should('be.visible');
        cy.contains('Metanomy').should('be.visible');
    });
    it('Visit communities detail page and verify community name',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/div[1]/div[1]/p').should('have.text','Metanomy');
    });
    it('Verify community DP is visible or not in top banner ',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.get('Img[src="https://storage.googleapis.com/tally-response-assets/BEOX0w/b50a4c54-fe3e-4a65-ab55-832c36e8bfa1/Copy-of-LystoMTNY.png"]').should('be.visible');
    });
    it('Verify community description or not in top banner',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Player driver next-gen esports. Earn rewards while gaming, creating and upscaling towards a career in gaming sports.').should('be.visible');
    });
    it('Verify Login to Join button visible or not in top banner',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/p').should('have.text','Login to Join');
    });
    it('Verify "Metanomys Featured Players" text is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div[2]/p').should('have.text',"Metanomy’s Featured Players");
    });
    it('Verify one of the feature player card is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Naveen Kumar').should('be.visible');
    });
    it('Verify "Featured News" text is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Featured News').should('be.visible');
    });
    it('Verify Total Members count is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Total Members').should('be.visible');
        cy.contains('81K+').should('be.visible');
        cy.get('Img[src="/static/images/ic_popps_count.svg"]').should('be.visible');
    });
    it('Verify Total Partnered Games count is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Total Partnered Games').should('be.visible');
        cy.contains('13+').should('be.visible');
        cy.get('Img[src="/static/images/ic_gamers_count.svg"]').should('be.visible');
    });
    it('Verify Total Tournaments count is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Total Tournaments').should('be.visible');
        cy.contains('0+').should('be.visible');
        cy.get('Img[src="/static/images/ic_game_count.svg"]').should('be.visible');
    });
    it('Verify "Partnered Games" text is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Partnered Games').should('be.visible');
        cy.get('Img[src="https://passport-general-public.s3.ap-south-1.amazonaws.com/admin/tags/game_tag/tag-e00dbb1d-c2e1-4a0e-b533-c0570a776699.png"]').should('be.visible');
    });
    it('Verify "Testimonials" text is present or not',() => {
        cy.visit('https://lysto.gg/communities/metanomy-1');
        cy.contains('Testimonials').should('be.visible');
       cy.contains("From my side it’s all good. Thanks for asking for our sharing and feedback. In any case of bad, I will immediately send my thoughts so we can make it better!").should('be.visible');
    });
});