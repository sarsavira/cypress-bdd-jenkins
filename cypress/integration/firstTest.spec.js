//cy.get //cy.contains //cy.root
//mocha bdd syntax integration-unit describe it
//chai structure should

//best practice jangan target element id class tag
//framework nge generate id

//cy.get('[data-cy=submit]') best selector

//action .click() .type() .select()

describe ('My First Test', () => {
    it ('Visit URL', () => {
        cy.visit ('http://bdd.atlasid.tech/');
        cy.url().should('eq', 'http://bdd.atlasid.tech/')
    })
    it ('Type in textbox', () => {
        cy.get('#inputQuote').type('Menulis disini')
    })
    it ('Select colour', () => {
        cy.get('#colorSelect').select('Yellow')
    })
    it ('Click button', () => {
        cy.get('#buttonAddQuote').click()
        cy.contains('Menulis').should('exist')
    })
    it ('Clear spesific quote', () => {
        cy.contains('Menulis')
        //    .wait(2000)
            .click()
            .should('not.exist')
    })
    //wait bukan nunggu element

    //yield 
    //cy.contains('Menulis').then(($elm) => {
    //    cy.get($elm).click().should('not.exist')
    //}
})