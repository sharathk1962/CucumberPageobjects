const expectChai = require('chai').expect;

class landingpage
{
    get clickonsignin() 
    {  
        return $('a.login').click(); 
    }
    get landedcreateaccountpage() 
    {   
        const button = browser.$('#SubmitCreate').getText();
        expectChai(button).to.equal('Create an account');
        return $('#SubmitCreate'); 
    }

    get createaccountbutton() 
    {  
      const email = $('#email_create').click();
        return $('#email_create').setValue( 'sharath22@gmail.com');
    
    }

    get accountregistationpage()
    {
        return  $('#SubmitCreate').click();
    }
   
}

module.exports=new landingpage();