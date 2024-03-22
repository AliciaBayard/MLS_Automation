describe('MLS Soccer Website Test Suite', () => {

    it('Should handle cookie consent pop-up and continue', () => {
        browser.url('https://www.mlssoccer.com/');
        //browser.setTimeout({ 'implicit': 5000 });
        browser.maximizeWindow();
    
        // Wait for the cookie consent pop-up to appear
        const acceptButton = $('.cc-btn.cc-dismiss');
        acceptButton.waitForExist({ timeout: 5000 });

        // Click on the accept button if it's displayed
        if (acceptButton.isDisplayed()) {
            acceptButton.click();
        }
    }); 

    it('should login, and continue to be logged in', () => {
        
        // Click on Sign in button
        const signInButton = $('#sign-in-button');
        signInButton.click();

        // Enter email address
        const emailInput = $('#email');
        emailInput.setValue('alicia.bayard@yahoo.com');

        // Enter password
        const passwordInput = $('#password');
        passwordInput.setValue('soccer123!');

        // Click on continue button
        const continueButton = $('#continue-button');
        continueButton.click();

        //Validate the presence of Profile icon
              expect($('use[xlink\\:href="#mls-profile-icon"]')).toBeDisplayed();

    });


    it('Should verify the MLS profile details', () => {

        const mlsProfileLink = $('[data-type="MLS Profile"]');
        mlsProfileLink.click();

        // Wait for the profile page to load
        browser.waitUntil(() => $('#my-preferences').isDisplayed(), {
            timeout: 5000,
            timeoutMsg: 'Profile page did not load within 5 seconds'
        });

        // Validate the presence of "My Preferences" text
        expect($('#my-preferences')).toBeDisplayed();

        // Validate the presence of "My Details" text
        expect($('#my-details')).toBeDisplayed();

        // Validate the presence of the "Sign out" button
        expect($('[data-testid="sign-out-button"]')).toBeDisplayed();

}); 

});
