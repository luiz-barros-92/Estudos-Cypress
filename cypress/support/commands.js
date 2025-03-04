Cypress.Commands.add('porc1', () => {
  cy.get('#porc1').type('10')
  cy.get('#porc2').type('100')
  cy.get('#calcularPorc1').click()

  cy.get('#outPorc1').should('be.visible').and('have.text', '10,00')
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

Cypress.Commands.add('somaPorc', () => {
  cy.get('#porc3').type('100')
  cy.get('#porc4').type('10')
  cy.get('#calcularPorc2').click()

  cy.get('#outPorc2').should('be.visible').and('have.text', '110,00')
})

Cypress.Commands.add('erroPorc3e4', () => {
  cy.get('#porc3').type('abc')
  cy.get('#calcularPorc2').click()

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Por favor, insira apenas valores numéricos!')
  })

  cy.get('#porc4').type('abc')
  cy.get('#calcularPorc2').click()

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Por favor, insira apenas valores numéricos!')
  })
})

Cypress.Commands.add('subtraiPorc', () => {
  cy.get('#porc5').type('100')
  cy.get('#porc6').type('10')
  cy.get('#calcularPorc3').click()

  cy.get('#outPorc3').should('be.visible').and('have.text', '90,00')
})

Cypress.Commands.add('erroPorc5e6', () => {
  cy.get('#porc5').type('abc')
  cy.get('#calcularPorc3').click()

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Por favor, insira apenas valores numéricos!')
  })

  cy.get('#porc6').type('abc')
  cy.get('#calcularPorc3').click()

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Por favor, insira apenas valores numéricos!')
  })
})

Cypress.Commands.add('erroGeometria', () => {
  cy.get('#raio').type('abc')
  cy.get('#unidade').select('cm')
  cy.get('#calcularRaio').click()  
})