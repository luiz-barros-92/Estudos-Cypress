Cypress.Commands.add('porc1', () => {
    cy.get('#porc1').type('10')
    cy.get('#porc2').type('100')
    cy.get('#calcularPorc1').click()
})
Cypress.Commands.add('erroPorc1e2', () => {
    cy.get('#porc1').type('abc')
    cy.get('#calcularPorc1').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, insira apenas valores numéricos!')
    })

    cy.get('#porc2').type('abc')
    cy.get('#calcularPorc1').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, insira apenas valores numéricos!')
    })
})
