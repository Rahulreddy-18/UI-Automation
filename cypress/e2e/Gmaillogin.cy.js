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
        cy.visit('https://accounts.google.com/v3/signin/identifier?opparams=%253FflowName%253DGeneralOAuthFlow%2526enable_granular_consent%253Dtrue%2526service%253Dlso%2526theme%253Dglif&dsh=S1191290434%3A1702639878453192&access_type=offline&client_id=83121525203-98sjhe9kt45t1s7rcjv8en3jdh4v6g32.apps.googleusercontent.com&flowName=GeneralOAuthFlow&gsiwebsdk=3&include_granted_scopes=true&o2v=2&prompt=consent&redirect_uri=storagerelay%3A%2F%2Fhttps%2Flysto.gg%3Fid%3Dauth360051&response_type=code&scope=openid+profile+email&service=lso&theme=glif&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAO8k9AB97NuUmwZJdr_ZM7JOWwlXjF7MmFy68Puu4mwYYT20DT57aM-X3saR_76qdcWBhWngJWD7fS-1pw9iJwBnCBhivScuh1cxeK-My7fi6awUKGHw8m6hYoYncbFqPPwOCATkqdkQ3ZRz_TSrn3V1FYB9_SOZ5bL09P8xMb-x0BGclfKx91GjxT4riDA6lt58A2DfdRSNZtMLVjqX3qQBqchDgGdz1xxrpiKbRHYzeCZl_pRsD66jm4AHlQpV2yBTfNUDBSZYtKxQrN4D5X3iHbr-y4eKe4aJv99ZV5ZvNZZ_YTUePwEJU9kFvy1M80h5llUXuVv4NiJ1FhEiH9xp2DPqrYZhC9CGZinJt47yWtvy0JlZFPGos15k5aBsfroCv3HmZIGDUxFVfbWr1P2PnZvo3yVXultcvs_OBDgXcjXM8glrNi-I1_e4hTQErxdz8XqF4V3tmHsbFE3n6DM8JgH5Q%26as%3DS1191290434%253A1702639878453192%26client_id%3D83121525203-98sjhe9kt45t1s7rcjv8en3jdh4v6g32.apps.googleusercontent.com%26theme%3Dglif%23&app_domain=https%3A%2F%2Flysto.gg&rart=ANgoxcduf85QjNg9vvIq2HEeh56vXyHn1grvdD0_nfRXsR6aOSp2XhQxmXV27EqYXYcSOhSr0OEW5RaJDOGOSRpy5nk69EAZof-PxCkuqoGqESml9XAr0VE')
        cy.origin('https://accounts.google.com/', () => {
        cy.get('input[type="email"]').type('rahul.b@lysto.io');
        cy.contains('Next').click()
        cy.wait(3000)
        cy.get('input[type="password"]').type('Rahulreddy');   
       })

})
})

