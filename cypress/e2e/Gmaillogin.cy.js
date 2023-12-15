describe('Login suite', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
      it('Gmail Login', () => {
        cy.visit('https://passport-staging.lysto.io');
        cy.get('#login-button').click({force: true});
        cy.get('Img[src="/static/images/google_login_icon.png"]').click({force: true});
        cy.wait(3000)
        cy.get('Img[src="/static/images/google_login_icon.png"]').click({force: true});
        cy.visit('https://accounts.google.com/')
        cy.origin('https://accounts.google.com/', () => {
        cy.get('input[type="email"]').type('rahul.b@lysto.io');
        cy.get('input[type="password"]').type('Rahulreddy');   
       })
})
})

