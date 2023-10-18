describe('Public view of a profile', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    it('Visit & Verify title of the page',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.title().should('eq','Rahulreddy')
    })
    it('Verify avatar',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="https://assets-test.lysto.io/0xef9264eDA4089457fdcc1e85E3A5478B173453A6/images/34056/trophy_1st.jpg"]').should('be.visible')
    })
    it('Verify profile name',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.contains('JohN CeNa').should('be.visible')
    })
    it('Verify short URL',() => {
         cy.visit('https://lysto.gg/passport/Rahulreddy')
         cy.xpath('/html/body/div[1]/section/div/div[2]/div[2]/div[2]/div/div/div[3]/div/div[2]/p').should('have.text','lys.to/Rahulreddy')
    })
    it('Verify share profile button and link',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.contains('Share Profile').click()
        cy.get('#textarea').should('have.text','https://lysto.gg/passport/Rahulreddy')
    })
    it('Verify about me',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.contains('About me').should('be.visible')
        cy.get('#about_me').should('have.text','BGMI - ACE Master {5190841496}.')
    })
    it('Verify create passport button',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.contains('Create Passport').should('be.visible')
        cy.get('Img[src="/static/images/lysto_logo.svg"]').should('be.visible')
    })
    //it('Verify Badges section',() => {
        //cy.visit('https://lysto.gg/passport/Rahulreddy')
        //cy.get('Img[src="https://passport-assets-private.s3.ap-south-1.amazonaws.com/images/Badge/1427ea91-6ae1-46b7-a64f-c2897b734a65/final-mtny-jpg.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4KPQSSJ23O32A75H%2F20231017%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T053617Z&X-Amz-Expires=60000&X-Amz-Signature=25a77bae8608c3bfd4cc340e5df4c36dcb4f9502ab2dbc68da0a71c46beb8894&X-Amz-SignedHeaders=host&x-id=GetObject"]').should('be.visible')
    //})
    it('Verify trophies section',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.contains('Trophies').click()
        cy.contains('No Trophies Found').should('be.visible')
    })
    it('Verify followers section',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_person.svg"]').click()
        cy.get('Img[src="https://passport-assets-public.s3-ap-south-1.amazonaws.com/0x22CAb30162693DF1f47E18e86E6835D85753f061/images/1244653/mascot-logo.jpeg"]').should('be.visible')
    })
    it('Verify Skills section',() => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_circle_skills.svg"]').click()
        cy.contains('Friendly').should('be.visible')
    })
    it('verify facebook icon in socials section', () => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_facebook.svg"]').should('be.visible')
    })
    it('verify instagram icon in socials section', () => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_instagram.svg"]').should('be.visible')
    })
    it('verify steam icon in socials section', () => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_steam.svg"]').should('be.visible')
    })
    it('verify twitter icon in socials section', () => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_twitter.svg"]').should('be.visible')
    })
    it('verify youtube icon in socials section', () => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_youtube.svg"]').should('be.visible')
    })
    it('verify twitch icon in socials section', () => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.get('Img[src="/static/images/ic_twitch.svg"]').should('be.visible')
    })
    it('verify team card', () => {
        cy.visit('https://lysto.gg/passport/Rahulreddy')
        cy.contains('Team Eagle').should('be.visible')
    })
//     it('verify My communities card', () => {
//         cy.visit('https://lysto.gg/passport/Rahulreddy')
//         cy.contains('My communities').should('be.visible')
//         cy.contains('Metanomy').should('be.visible')
//     })
//     it('verify My popps card', () => {
//         cy.visit('https://lysto.gg/passport/Rahulreddy')
//         cy.contains('View All').should('be.visible')
//         cy.contains('Metanomy Badge').should('be.visible')
//     })
//     it('verify BGMI Gamer card', () => {
//         cy.visit('https://lysto.gg/passport/Rahulreddy')
//         cy.contains('【Rã๛Hûl】 | ').should('be.visible')
//         cy.contains('Favorite weapon:').should('be.visible')
//         cy.contains('Groza').should('be.visible')
//         cy.contains('Achievements').should('be.visible')
//         cy.contains('Clips').should('be.visible')
//     })
})