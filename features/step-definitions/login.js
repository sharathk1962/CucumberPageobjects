const { Given,When,Then } = require('@cucumber/cucumber');
const lp = require('../pageobjects/landingpage');
const reg = require('../pageobjects/registartion');

    Given('I am on the home page', () => {
            browser.url("/");
            browser.maximizeWindow();
            browser.pause(4000);
        });


    When('I click on signin button', () => {
     lp.clickonsignin;
     browser.pause(4000);
    });

    Then('I am landed on create account page', () => {
      lp.landedcreateaccountpage;
     });
    
     When('you enter email id and click on create account', () => {
      lp.createaccountbutton;
     });
    
     Then('account registration page opened', () => {
      lp.accountregistationpage;
      browser.pause(5000);
     });

     When('you enter all the details and click on register', () => {
        reg.gender;
        reg.firstname;
        reg.lastname;
        reg.password;
        reg.selectday;
        reg.selectmonth;
        reg.selectyear;
        reg.adressfirstname;
        reg.adresslastname;
        reg.adress;
        reg.city;
        reg.selectstate;
        reg.postcode;
        reg.mobile;
        reg.alias;
        reg.register;
        reg.homepageicon;
        
       });
      
       Then('account will be registered and verified logged in user', () => {
        browser.pause(5000);
        reg.usernameverification;
       });

   
      
      

