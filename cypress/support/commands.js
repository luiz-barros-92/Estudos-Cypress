Cypress.Commands.add('porc1', () => {
    cy.get('#porc1').type('10')
    cy.get('#porc2').type('100')
    cy.get('#calcularPorc1').click()
})
