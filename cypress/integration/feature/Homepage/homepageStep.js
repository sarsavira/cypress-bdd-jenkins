/* global Given, When, Then */
const Homepage = require('../../../support/page/homepage');
let homepage = new Homepage();

Given (/^I open BDD Atlas Web$/, () =>{
    homepage.visit('');
})
When (/^I type a quote: (.+)$/, (quote) => {
    homepage.type_quote(quote)
})

And (/^I choose (\w+) color$/, (color) => {
    homepage.choose_color(color)
})

Then(`I verify quote submitted {string} and {string}`,(colour,quote)=>{
    homepage.submit_quote(quote,colour);
 })
 
 Then(/^I verify quote has been deleted: (.+)$/,(quote)=>{
    homepage.clear_quote(quote); 
 })
