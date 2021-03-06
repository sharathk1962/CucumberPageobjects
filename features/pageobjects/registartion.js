const expectChai = require('chai').expect;

class registartion
{

get gender()   { return $('#id_gender1').click(); }

get firstname()  { return  $('#customer_firstname').setValue( 'Sharath'); }

get lastname()  { return  $('#customer_lastname').setValue( 'Kumar'); } 

get password()  { return  $('#passwd').setValue( 'qwerty'); } 
 
get selectday()  { 
    const selectday= $('#days').click();
    return   $('#days').selectByIndex(5);; 
} 

get selectmonth()  { 
    const selectmonth= $('#months').click();
    return   $('#months').selectByIndex(3); 
} 

get selectyear()  { 
    const selectyear= $('#years').click();
    return  $('#years').selectByIndex(2); 
} 
 
get adressfirstname()  { return  $('#firstname').setValue( 'Suraj'); }

get adresslastname()  { return  $('#lastname').setValue( 'Shet'); }

get adress()  { return  $('#address1').setValue( 'Shristi Apartments'); }

get city()  { return   $('#city').setValue( 'Banaglore'); }

get selectstate()  { 
    const selectstate= $('#id_state').click();
    return  $('#id_state').selectByIndex(7);; 
} 

get postcode()  { return  $('#postcode').setValue( '75431'); }

get mobile()  { return   $('#phone_mobile').setValue( '9738237272'); }

get alias()  { return  $('#alias').setValue( 'Bengaluru'); }

get register()   { return $('#submitAccount').click(); }

get homepageicon()   { return $('img.logo.img-responsive').click(); }

get usernameverification()   { 
    const username = browser.$('div.header_user_info > a > span').getText()
    expectChai(username).to.equal('Sharath Kumar');
        return $('div.header_user_info > a > span');
 }

}


module.exports=new registartion();