class homePage
{
    /////* SELECTORS */////
    elements =
    {
        signInButton: ()=> cy.get('.login'),
        womenButton: ()=> cy.get('[title="Women"]'),
        blouseButton: ()=> cy.get('.submenu-container > :nth-child(1) > ul > :nth-child(2) > a'),
        tshirtButton: ()=> cy.get('.submenu-container > :nth-child(1) > ul > :nth-child(1) > a'),
        summerDressesButton: ()=> cy.get('.submenu-container > :nth-child(2) > ul > :nth-child(3) > a')
    }

    /////* ACTIONS */////
    clickSignin()
    {
        this.elements.signInButton().click()
    }

    hoverOverWomen()
    {
        this.elements.womenButton().realHover('mouse')
    }

    blouseButtonIsVisible()
    {
        this.elements.blouseButton().should('be.visible')
    }

    assertButtonIsWomen()
    {
        this.elements.womenButton().should('contain', 'Women')
    }

    clickBlouseButton()
    {
        this.elements.blouseButton().click()
    }

    tshirtButtonIsVisible()
    {
        this.elements.tshirtButton().should('be.visible')
    }

    clickTshirtButton()
    {
        this.elements.tshirtButton().click()
    }

    summerDressesButtonIsVisible()
    {
        this.elements.summerDressesButton().should('be.visible')
    }

    clickSummerDressesButton()
    {
        this.elements.summerDressesButton().click()
    }
}

export default new homePage