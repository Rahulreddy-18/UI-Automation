describe('Popps details page', () => {
    it('Verify Popp name',() => {
        cy.visit('https://lysto.gg/popp/lystopartner/metanomy-badge-399')
        cy.contains('Metanomy Badge').should('be.visible')
    })
    it('Verify Popp description',() => {
        cy.visit('https://lysto.gg/popp/lystopartner/metanomy-badge-399')
        cy.contains('This badge is awarded for being part of Metanomy Community.').should('be.visible')
    })
    it('Verify category section',() => {
        cy.visit('https://lysto.gg/popp/lystopartner/metanomy-badge-399')
        cy.contains('CATEGORY').should('be.visible')
        cy.contains('Social').should('be.visible')
        cy.get('Img[src="https://passport-general-public.s3.ap-south-1.amazonaws.com/admin/tags/category/tag-4e19fe27-7ee1-4b6a-b905-3f73c5b5a45c.png"]').should('be.visible')
    })
    it('Verify "issued by" section',() => {
        cy.visit('https://lysto.gg/popp/lystopartner/metanomy-badge-399')
        cy.contains('ISSUED BY').should('be.visible')
        cy.contains('Metanomy').should('be.visible')
        cy.get('Img[src="https://passport-general-public.s3-ap-south-1.amazonaws.com/partner/meta/bc90be8f-0583-484f-8db1-2b2e8c0b96d8.png"]').should('be.visible')
    })
    it('Verify share button and link',() => {
        cy.visit('https://lysto.gg/popp/lystopartner/metanomy-badge-399')
        cy.contains('Share').should('be.visible')
        cy.get('Img[src="/static/images/ic_share.svg"]').click()
        cy.get('#textarea').should('have.text','https://lysto.gg/popp/lystopartner/metanomy-badge-399')
    })
    it('Verify badge holders section',() => {
        cy.visit('https://lysto.gg/popp/lystopartner/metanomy-badge-399')
        cy.contains('Badge Holders').should('be.visible')
        cy.contains('thejaswiniMS').should('be.visible')
    })
    it('Verify community badges section',() => {
        cy.visit('https://lysto.gg/popp/lystopartner/metanomy-badge-399')
        cy.contains('Community Badge').should('be.visible')
        cy.contains('TMR Esports Community Member').should('be.visible')
        cy.contains('This is an exclusive badge awarded to Community Member of TMR Esports Community').should('be.visible')
    })
})