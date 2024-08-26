
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/homePage';
import ElectronicsPage from '../../pages/electronicsPage';
import PhonesPage from '../../pages/phonesPage';

const homePage = new HomePage();
const electronicsPage = new ElectronicsPage();
const phonesPage = new PhonesPage();

Given('I am on the Amazon homepage', () => {
  homePage.visit();
});

When('I navigate to the Electronics and Computers category', () => {
  homePage.navigateToElectronics();
});

When('I select Phones and Accessories', () => {
  electronicsPage.navigateToPhonesAndAccessories();
});

When('I filter by Mobile Phones', () => {
  phonesPage.applyFilters();
});

Then('I should see a list of Samsung phones that match the criteria', () => {
  phonesPage.validatePhoneList();
});
