const expectChai = require('chai').expect;

class addtocart
{
    get searchtshirt() 
    {  
        const search=$('#search_query_top');
        search.setValue('t-shirts');
     return $('button.btn.btn-default.button-search').click();
    }
    get clickontshirt() 
    {   
        return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img').click(); 
    }

    get addingtocart() 
    {  
        return $('#add_to_cart > button').click();
    
    }

    get checkout()
    {
        return $('div.button-container > a').click();
    }

    get verifyaaddeditem()
    {
        const elem = browser.$('td.cart_description > p > a').getText()
        expectChai(elem).to.equal('Faded Short Sleeve T-shirts');
        return $('td.cart_description > p > a');
    }
   
}

module.exports=new addtocart();