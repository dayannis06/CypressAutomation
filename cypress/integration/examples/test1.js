///<reference types="Cypress"/>

describe('My First Test Suite', function() 
{
    it('My FirstTest case', function()
    {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').find('.product').should('have.length',4)
    cy.wait(2000)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    console.log('prueba ')
    cy.get('.products').find('.product').each(($el, index, $list)=> {

       const texVeg= $el.find('h4.product-name').text()
       if(texVeg.includes('Cashews'))
       {
        $el.find('button').click()
       }
    })
    //assert if logo text is correctly displeyed
    cy.get('.brand').should('have.text', 'GREENKART')
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())
    }
    
    )
    
      
    })
})