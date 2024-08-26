class PhonesPage {
  applyFilters() {
    
    cy.contains('£100 to £200').click();
    
    cy.get('li[aria-label="Samsung"] label').click();
    
    cy.xpath("//span[contains(text(), '20 MP & above')]").click();
    
    cy.contains('2023').click();
    
  }
  
  validatePhoneList() {
    const invalidItems = [];

    for (let i = 0; i < 5; i++) { 
    cy.window().then((win) => {
      win.scrollTo(0, document.body.scrollHeight);
    });
    cy.wait(2000); // Wait for additional items to load
  }

cy.get('div[class="a-section a-spacing-base"]', { timeout: 60000 }).should('exist').and('have.length.greaterThan', 0).each(($phone) => {
  cy.wrap($phone).find('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]').should('exist').then(($name) => {
    const phoneName = $name.text().trim().toLowerCase();
    //Log all phones regardless of whether they meet the criteria
    cy.log(`All Phone Names After Search: ${phoneName}`);

    // Check if the item is a Samsung phone
    if (phoneName.includes('samsung')) {
      // Check if the price is present
      cy.wrap($phone).find('span[class="a-offscreen"]').then(($priceElement) => {
        if ($priceElement.length) {
          // If the price element exists, proceed with price validation
          cy.wrap($priceElement).invoke('text').then((priceText) => {
            const price = parseFloat(priceText.replace('£', '').trim());

            // Validate the price range
            if (price < 100 || price > 200) {
              cy.wrap($phone).then(($el) => {
                $el.css('border', '3px solid red');
              });
        
              // Take a screenshot of the highlighted element only
              cy.wrap($phone).screenshot(`Invalid Item-Not matching with the price definition - ${phoneName}`);
              invalidItems.push({
                name: phoneName,
                price: `${priceText.trim()}`,
              });
            }
          });
        } else {
          // Handle items with "See options" instead of a price
          cy.wrap($phone).find('span:contains("See options")').then(($seeOptionsElement) => {
            if ($seeOptionsElement.length) {
              // If the "See options" button is present, add it to the invalid items list
              invalidItems.push({
                name: phoneName,
                issue: 'Price not available - See options displayed',
              });
            }
          });
        }
      });
    } else {
      // If it's not a Samsung phone, add it as invalid
      cy.wrap($phone).then(($el) => {
        $el.css('border', '3px solid red');
      });

      // Take a screenshot of the highlighted element only
      cy.wrap($phone).screenshot(`Invalid Item-Not matching phone name - ${phoneName}`);

      invalidItems.push({
        name: phoneName,
        issue: 'Not a Samsung phone',
      });
    }
  });
})
.then(() => {
  if (invalidItems.length > 0) {
    cy.log('Invalid items found:');
    invalidItems.forEach((item) => {
      cy.log(`Name: ${item.name},  ${item.price?`Price: ${item.price}`:`Issue: ${item.issue}`}`);
    });
  } else {
    cy.log('All items meet the criteria.');
  }
});
}
  }

export default PhonesPage;
