class blousesPage
{
    /////* SELECTORS */////
    elements =
    {
        moreButton: ()=> cy.get('.lnk_view > span'),
    }

    /////* ACTIONS */////
    clickMoreButton()
    {
        this.elements.moreButton().click()
    }
}

export default new blousesPage