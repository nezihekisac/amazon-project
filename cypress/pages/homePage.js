class HomePage {
    visit() {
      cy.visit('/');
    }
  
    navigateToElectronics() {
      cy.get('input[id="sp-cc-accept"]').click();
      cy.get('a[id="nav-hamburger-menu"]').click();
      cy.contains('Electronics & Computers').click();
    }
  }
  
  export default HomePage;
  