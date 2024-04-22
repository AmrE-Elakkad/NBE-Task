class productPage
{
    /////* SELECTORS */////
    elements =
    {
        sizeBox: ()=> cy.get('#group_1'),
        whiteColorBox: ()=> cy.get('#color_8'),
        quantityBox: ()=> cy.get('#quantity_wanted'),
        addToCartButton: ()=> cy.get('.exclusive > span'),
        proceedToCheckoutButton: ()=> cy.get('.button-medium > span'),
        availabilityStatus: ()=> cy.get('#availability_value')
    }

    /////* ACTIONS */////
    selectSize(size)
    {
        this.elements.sizeBox().select(size)
    }

    clickWhiteColor()
    {
        this.elements.whiteColorBox().click()
    }

    assertQuantityIs(quantity)
    {
        this.elements.quantityBox().should('have.value', quantity)
    }

    clickAddToCart()
    {
        this.elements.addToCartButton().click()
    }

    clickProceedToCheckout()
    {
        this.elements.proceedToCheckoutButton().click()
    }

    chooseWhiteColor()
    {
        this.elements.whiteColorBox().click()
    }

    addToCartInvisible()
    {
        this.elements.addToCartButton().should('not.be.visible')
    }
}

export default new productPage