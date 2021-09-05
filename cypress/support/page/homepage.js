const locator = require('../locator/homepageLocator');
//hash_map
let css_color = {
    Blue: 'background-color: blue;',
    Yellow: 'background-color: yellow;',
    White: 'background-color: white;',
    Cyan: 'background-color: cyan;'
}

class Homepage {
    async visit(path){
        cy.visit(path);
        return cy.url().should('eq', 'http://bdd.atlasid.tech/')
    }

    async type_quote(quote){
        return cy.get(locator.datatestid.ta_quote).type(quote)
    }

    async choose_color(color){
        return cy.get(locator.datatestid.sel_color).select(color)
    }

    async submit_quote(quote, color){
        cy.get(locator.datatestid.btn_submit).click()
        cy.get(locator.datatestid.cont_color).should('have.attr', 'style', css_color[color])
        //cy.get(locator.datatestid.cont_color).should('have.attr', 'style').then((color) => {
        //    expect(color).to.be.equal(css_color[color])
        //})
        return cy.contains(quote).should('exist')

    }

    async clear_quote(quote){
        cy.contains(quote).click()
        return cy.contains(quote).should('not.exist')
    }
}

module.exports=Homepage;