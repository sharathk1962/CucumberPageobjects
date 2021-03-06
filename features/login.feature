Feature: Automation practice website registration

  Scenario: Taking me to the account creation page

    Given I am on the home page
    When I click on signin button
    Then I am landed on create account page

    When you enter email id and click on create account
    Then account registration page opened
 
    When you enter all the details and click on register
    Then account will be registered and verified logged in user