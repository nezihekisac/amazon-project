Feature: Samsung Phone Filtering

  Scenario: List all Samsung phones with specific specifications
    Given I am on the Amazon homepage
    When I navigate to the Electronics and Computers category
    And I select Phones and Accessories
    And I filter by Mobile Phones
    Then I should see a list of Samsung phones that match the criteria