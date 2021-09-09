// --------------------------------------- CYPRESS TESTS FOR APPOINTMENTS ----------------------------- //

describe("Appointments", () => {
  
  // reset database
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
   });
 

   // test steps

   // --------------------------- Test: booking an interview ------------------------------ //

  it('should book an interview', () => {
    cy.get('[alt=Add]')
    .first()
    .click();

    cy.get('[data-testid=student-name-input]').type('Lydia Miller-Jones')
    cy.get('[alt="Sylvia Palmer"]').click();

    cy.contains('Save').click();

    cy.contains('.appointment__card--show', 'Lydia Miller-Jones')
    .contains('.appointment__card--show', 'Sylvia Palmer');
  });


  // ------------------------ Test: editing an interview ------------------------------ //

  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });
  
    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']").click();
  
    cy.contains("Save").click();
  
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });


  // ------------------------ Test: cancelling an interview ------------------------------ //

  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
    .click({ force: true });

    cy.contains("Confirm").click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });


});