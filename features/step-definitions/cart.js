const { Given,When,Then } = require('@cucumber/cucumber');
const ca = require('../pageobjects/addtocart');

    Given('I am on the home page for cart items', () => {
    browser.url('/');
       browser.maximizeWindow();
     //   browser.pause(4000);
        });


    When('I click on search and enter Tshirt', () => {
     ca.searchtshirt;
    });

    Then('Tshirts window will be opened', () => {
     ca.clickontshirt;
     });
    
     When('you click on the Tshirt and add items to the cart', () => {
     ca.addingtocart;
     });
    
     Then('tshirt will be added to the cart', () => {
     browser.pause(4000);
     });

     When('you click on proceed to checkout', () => {
        ca.checkout;
       });
      
       Then('added Tshirts will be appear on the payment page and verify the same', () => {
        ca.verifyaaddeditem;
       });

   
      
      

