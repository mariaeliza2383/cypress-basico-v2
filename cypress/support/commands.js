Cypress.Commands.add('fillMandatoryFieldsAndSubmmit', function () {
    cy.get('#firstName').type ('Maria')
    cy.get('#lastName').type ('Bernardes')
    cy.get('#email').type ('maria.eliza@gmail.com')
    cy.get('#open-text-area').type ('Teste')
    cy.get ('button[type="submit"]').click()

})