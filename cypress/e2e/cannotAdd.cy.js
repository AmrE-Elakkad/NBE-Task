import homePage from "../pages/homePage"
import signinPage from "../pages/signinPage"
import tshirtsPage from "../pages/tshirtsPage"
import productPage from "../pages/productPage"

it ('main', ()=>
{
    /* VISIT WEBSITE */
    cy.visit('/')

    /* LOGIN USER */
    homePage.clickSignin()

    signinPage.enterEmail('existing@gmail.com')
    signinPage.enterPassword('Password123')
    signinPage.clickLogin()

    /////* NAVIGATE TO TSHIRTS PAGE */////
    homePage.hoverOverWomen()
    homePage.assertButtonIsWomen()
    homePage.tshirtButtonIsVisible()
    homePage.clickTshirtButton()

    // /////* CLICK MORE BUTTON ON THE TSHIRT */////
    tshirtsPage.clickMoreButton()

    /////* CHOOSE SIZE M AND WHITE COLOR*/////
    productPage.selectSize('M')

    /////* ASSERT THAT ADD TO CART BUTTON IS NOT VISIBLE */////
    productPage.addToCartInvisible()
})