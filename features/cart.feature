Feature: Adding item to cart and verify

  Scenario: Add items to the cart

    Given I am on the home page for cart items
    When I click on search and enter Tshirt
    Then Tshirts window will be opened

    When you click on the Tshirt and add items to the cart
    Then tshirt will be added to the cart
 
    When you click on proceed to checkout
    Then added Tshirts will be appear on the payment page and verify the same