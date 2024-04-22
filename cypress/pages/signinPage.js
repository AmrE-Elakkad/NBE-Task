class signinPage
{
        /////* SELECTORS */////
        elements =
        {
            emailBox: ()=> cy.get('#email'),
            passwordBox: ()=> cy.get('#passwd'),
            loginButton: ()=> cy.get('#SubmitLogin > span')
        }

        /////* ACTIONS */////
        enterEmail(email)
        {
            this.elements.emailBox().type(email)
        }

        enterPassword(password)
        {
            this.elements.passwordBox().type(password)
        }

        clickLogin()
        {
            this.elements.loginButton().click()
        }
}

export default new signinPage