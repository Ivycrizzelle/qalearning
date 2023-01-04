/// <reference types="cypress" />
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

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
  });

  When (`Admin clicks "Login" button`, () => {
    cy.get(
      `[src="https://static.nexiux.io/images/@sites/betvision/images/welcome.jpg"]`
    ).should("exist");
   cy.get('button:contains("Login")').click();
  });
  //Member should see log in modal
Then(`Admin should see Login modal`, () => {
  cy.get('header:contains("Login")').should("exist");
  });
///Member should see log in modal
  When (`Admin clicks "Login" button`, () => {
    cy.get(
      `[src="https://static.nexiux.io/images/@sites/betvision/images/welcome.jpg"]`
    ).should("exist");
   cy.get('button:contains("Login")').click();
  });
  //Member should see log in modal
Then(`Admin can add username in Login modal`, () => {
  cy.get('header:contains("Login")').should("exist");
  cy.get('[placeholder ="Username"]').should("exist"); ///key to success!
  cy.get('[placeholder ="Username"]').type('timeout15')
  });
///Member can log in
When (`Admin clicks "Login" button`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/betvision/images/welcome.jpg"]`
  ).should("exist");
 cy.get('button:contains("Login")').click();
});
And ('Admin can add username in Login modal', () => {
 cy.get('header:contains("Login")').should("exist");
 cy.get('[placeholder ="Username"]').should("exist"); ///key to success!
 cy.get('[placeholder ="Username"]').type('timeout15')
});
And ('Admin can add password in Login Modal', () => {
 cy.get('[placeholder ="Password"').should("exist"); 
 cy.get('[placeholder ="Password"]').type('password')
});
And ('Admin clicks "Login" button', () => {
  cy.get('[placeholder ="Password"').should("exist"); 
  cy.get('[placeholder ="Password"]').type('password')
  cy.get('[type = "submit"]',{ timeout: 40000 }).click();
 });
//Member should see log in modal
Then(`successfully log in web`, () => {
  cy.get(`[role="alert"]`).should("exist");
});
// Member adds incorrect password
When (`member sees log in modal`, () => {
 cy.get('button:contains("Login")').click();
 cy.get('header:contains("Login")').should("exist");
 cy.get(`[id="chakra-modal--body-4"]` ).should("exist");
});
And ('member can add username in Login modal', () => {
  cy.get('[role="dialog"]').should('be.visible')
  cy.get('header:contains("Login")').should("exist");
  cy.get('[placeholder ="Username"]').should("exist"); ///key to success!
  cy.get('[placeholder ="Username"]').type('timeout15')
 });
 And ('member can add password in Login Modal', () => { ///wrong password
  cy.get('[placeholder ="Password"').should("exist"); 
  cy.get('[placeholder ="Password"]').type('password!')
 });
 And ('member clicks "Login" button', () => {
  cy.get('[type = "submit"]').click();
  });
  Then(`should see alert message `, () => {

  });