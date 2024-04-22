import homePage from "../pages/homePage"
import signinPage from "../pages/signinPage"
import blousesPage from "../pages/blousesPage"
import productPage from "../pages/productPage"
import cartPage from "../pages/cartPage"

it ('main', ()=>
{
    /* VISIT WEBSITE */
    cy.visit('/')

    /* LOGIN USER */
    homePage.clickSignin()

    signinPage.enterEmail('existing@gmail.com')
    signinPage.enterPassword('Password123')
    signinPage.clickLogin()

    /////* NAVIGATE TO BLOUSES PAGE */////
    homePage.hoverOverWomen()
    homePage.assertButtonIsWomen()
    homePage.blouseButtonIsVisible()
    homePage.clickBlouseButton()

    /////* CLICK MORE BUTTON ON THE BLOUSE */////
    blousesPage.clickMoreButton()

    /////* CHOOSE SIZE M AND WHITE COLOR*/////
    productPage.selectSize('M')
    productPage.assertQuantityIs(1) 
    productPage.chooseWhiteColor()

    /////* ADD TO CART AND PROCEED */////
    productPage.clickAddToCart()
    productPage.clickProceedToCheckout()

    /////* INCREASE ITEM QUANITY */////
    cartPage.clickIncreaseQuantity()
    cartPage.assertQuantityIs('2')
})