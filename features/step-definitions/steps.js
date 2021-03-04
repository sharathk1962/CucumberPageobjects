
const { Given } = require('@cucumber/cucumber');

const homepage = require('../pageobjects/homepage');

    Given('/^I am on the home page$/', function () {
        browser.url('http://automationpractice.com/index.php');
      });

   

