describe('MLS Soccer Website Test Suite', () => {

    it('should handle cookie consent pop-up and continue', () => {
        browser.url('https://www.mlssoccer.com/');
    
        // Wait for the cookie consent pop-up to appear
        const acceptButton = $('.cc-btn.cc-dismiss');
        acceptButton.waitForExist({ timeout: 5000 });
    
        // Click on the accept button if it's displayed
        if (acceptButton.isDisplayed()) {
            acceptButton.click();
        }
    }); 
    it('should validate top navigation links', () => {
            
            const navigationLinks = [
                'Schedule',
                'News',
                'Watch',
                'Standings',
                'Stats',
                'Clubs'
            ];
    
            for (const linkText of navigationLinks) {
                const linkElement = $(`//div[@class='menu-bar__menu-item menu-bar__menu-item--type-${linkText.toLowerCase()}']`);
                expect(linkElement).toBeDisplayed();
            }
        });
        it('Click on the MLS profile link', () => {

            const mlsProfileLink = $('[data-type="MLS Profile"]');
            mlsProfileLink.click();
    
            // Wait for the profile page to load
            // Replace 'profilePageLoadedSelector' with the appropriate selector for detecting page loaded state
            // e.g., an element unique to the profile page
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
