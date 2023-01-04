/// <reference types="cypress" />
import { Given, When, Then, } from "cypress-cucumber-preprocessor/steps";


before(() => {
  Given(`Admin is in web staging`, () => {
    cy.visit(`http://web-staging.aonewallet.com/`);
  });
});

//Admin sees Main Page
Then(`Admin sees welcome banner`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/betvision/images/welcome.jpg"]`
  ).should("exist");

  cy.get(`button.sportsbook-bet-here-btn`).click();
  cy.url().should(`include`, `/sportsbook`);
});
//Admin sees Casino Page
When(`Admin clicks "Casino" page`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  
});


  Then(`Admin should see filter`, () => {
    cy.get(`p > [href="/help-centre"]`).contains("Help Centre").should("exist");
    // cy.get(`class="chakra-select__wrapper css-tojxqp"`).should("exist");
    }
  );

///Member can click filter button
//Admin sees Casino Page
// When(`Admin clicks "Casino" page`, () => {
//   cy.get(
//     `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
//   ).should("exist");
//   cy.get(`:nth-child(2) > li > .chakra-text`, { timeout: 20000 }).should("exist");
    
// })
// And (`Admin should see filter options`, () => {
//   cy.get(
//     `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
//   ).should("exist");
//   cy.get(`:nth-child(2) > li > .chakra-text`, { timeout: 20000 }).should("exist");
    
// });


//Admin sees Safer Gaming page
When(`Admin clicks {string} page 3`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(5) > li > .chakra-text`, { timeout: 20000 })
    .contains(str)
    .click();
});

Then(`Admin should see Safer Gaming page`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.url().should("include", "/responsible-gambling");
});

// Admin can see safer gaming filter

// When(`Admin clicks "Safer Gaming" page 3`, (str: string)=> { cy.get(
//   `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
// ).should("exist");
// cy.get(`:nth-child(5) > li > .chakra-text`, { timeout: 20000 })
//   .contains(str)
//   .click()
// });
// And(`Admin clicks safer gaming filter`, ()=> 
// {cy.get(`[id="menu-button-15"]`).should("exist")
// cy.get(`[id="menu-button-15"]`).click()
// }); 
// Then(`Admin should see safer gaming options`, (
// )=> {cy.get(`[role="menu"]`).should("exist")});

// //Admin can select "understanding gambling" option
// When(`Admin clicks "Safer Gaming" page 3`, (str: string)=> { cy.get(
//   `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
// ).should("exist");
// cy.get(`:nth-child(5) > li > .chakra-text`, { timeout: 20000 })
//   .contains(str)
//   .click()
// });
// And(`Admin clicks safer gaming filter`, ()=> 
// {cy.get(`[id="menu-button-15"]`).should("exist")
// cy.get(`[id="menu-button-15"]`).click()
// });
// And(`Admin clicks "Understading gambling" option`, ()=> {
//   cy.get(`[id="menu-button-15"]`).click()

//  cy.get('[class="chakra-text css-0"], "Understading gambling"').click()
//   // cy.get('[#menu-list-15"]').should("exist").select("Understading gambling")
 
// }

// );
