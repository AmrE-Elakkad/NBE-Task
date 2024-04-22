class cartPage
{
    /////* SELECTORS */////
    elements =
    {
        increaseQuantityButton: ()=> cy.get('[class="icon-plus"]'),
        quantityBox: ()=> cy.get('.cart_quantity_input')
    }

    /////* ACTIONS */////
    clickIncreaseQuantity()
    {
        this.elements.increaseQuantityButton().click()
    }

    assertQuantityIs(quantity)
    {
        this.elements.quantityBox()
         .invoke('attr', 'size')
         .should('eq', quantity)
    }
}

export default new cartPage