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

Cypress.Commands.add('geometriaRaio', () => {
  cy.get('#raio').type('50')
  cy.get('#unidade').select('m')
  cy.get('#calcularRaio').click()

  cy.get('#outUnidade1, #outUnidade2').each(($element) => {
    cy.wrap($element).should('be.visible').and('have.text', 'm')
  })
  cy.get('#outUnidade3, #outUnidade4').each(($element) => {
    cy.wrap($element).should('be.visible').and('have.text', 'm²')
  })
  cy.get('#outUnidade5').should('be.visible').and('have.text', 'm³')

  cy.get('#outResultado1').should('be.visible').and('have.text', '100,00')
  cy.get('#outResultado2').should('be.visible').and('have.text', '314,15')
  cy.get('#outResultado3').should('be.visible').and('have.text', '7853,75')
  cy.get('#outResultado4').should('be.visible').and('have.text', '31415,00')
  cy.get('#outResultado5').should('be.visible').and('have.text', '523583,33')
})

Cypress.Commands.add('erroGeometriaRaio', () => {
  cy.get('#raio').type('abc')
  cy.get('#unidade').select('cm')
  cy.get('#calcularRaio').click()

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Por favor, insira apenas valores numéricos positivos!')
  })
})

Cypress.Commands.add('celsiusPara' , () => {
  cy.get('#celsius').type('-9.44', {delay: 0})
  cy.get('#celsiusPara').click()

  cy.get('#fahren').should('be.visible').and('have.text', '15,01 °F')
})

Cypress.Commands.add('erroCelsiusPara', () => {
  cy.get('#celsius').type('abc')
  cy.get('#celsiusPara').click()

  cy.on('window:alert', (str) => {
    expect(str).to.equal('Por favor, insira apenas valores numéricos!')
  })
})