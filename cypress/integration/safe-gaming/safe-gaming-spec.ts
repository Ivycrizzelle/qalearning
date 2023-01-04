/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// before(() => {
//   Given(`Admin is in web staging`, () => {
//     cy.visit(`http://web-staging.aonewallet.com/`);
//   });
// });

// When(`Admin clicks {string}`, (str: string) => {
//   cy.get(
//     `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
//   ).should("exist");
//   cy.get(`[href="/responsible-gambling"]`, { timeout: 20000 })
//     .contains(str)
//     .click();
// });

// Then(`Admin should see Safer Gaming page`, () => {
//   cy.get(
//     `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
//   ).should("exist");
//   cy.url().should("include", "/responsible-gambling");
// });
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
When(`Admin clicks {string} page1`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(2) > li > .chakra-text`, { timeout: 20000 })
    .contains(str)
    .click();
});

Then(`Admin should see filter1 options`, (dataTable: any) => {
  cy.get(`p > [href="/help-centre"]`).contains("Help Centre").should("exist");
  cy.contains(`Filters`, { timeout: 20000 })
    // .contains("Filters:")
    .should("exist");
  const value = dataTable.hashes();
  for (let i = 0; i < value.length; i++) {
    cy.get(`[data-testid="game-dropdown-filter"]`)
      .contains(value[i].tab)
      .should("exist");
  }
});
///Member can click filter button
//Admin sees Casino Page
When(`Admin clicks {string} page1`, (str: string) => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(2) > li > .chakra-text`, { timeout: 20000 })
    .contains(str)
    .click();
});


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