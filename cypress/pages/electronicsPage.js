class ElectronicsPage {
    navigateToPhonesAndAccessories() {
      cy.contains('Phones & Accessories').click( {force: true});
      cy.contains('Mobile Phones & Smartphones').click({force: true});
      
    }
  }
  
  export default ElectronicsPage;
  