///<reference types="Cypress"/>

class Home{

    clickEndtoEndTest(){
        const field=cy.get('#solutions > a:nth-child(4) > div > div > img')
        field.click()
        return this
    }

    clickTestAutomationTest(){
        const field=cy.get('#solutions > a:nth-child(5) > div > div > img')
        field.click()
        return this
    }

    performanceTest(){
        const field=cy.get('#solutions > a:nth-child(6) > div > div > img')
        field.click()
        return this
    }

    mobileTest(){
        const field=cy.get('#solutions > a:nth-child(7) > div > div > img')
        field.click()
        return this
    }

    
}

export default Home;