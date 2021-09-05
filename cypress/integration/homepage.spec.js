const Homepage = require('../support/page/homepage')
let homepage = new Homepage

const HomepageData = require('../support/datatest/homepageData')

describe('First Test', () => {
    it('Visit BDD Atlas Web', () => {
        homepage.visit('')
    })
    it('Type Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote)
    })
    it('Select color', () => {
        homepage.choose_color(HomepageData.datatest.quote_color)
    })
    it('Click button', () => {
        homepage.submit_quote(HomepageData.datatest.quote, HomepageData.datatest.quote_color)
    })
    it('Clear quote', () => {
        homepage.clear_quote(HomepageData.datatest.quote)
    })
})