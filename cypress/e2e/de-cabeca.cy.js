describe('De Cabeça - Sua Calculadora Online', () => {
  beforeEach(() => {
    cy.visit('./de-cabeca/index.html')
  })

  it('verificar o titulo', () => {    
    cy.title().should('eq', 'De Cabeça - Sua Calculadora Online')
  })

  it('preenchimento de formulário de Porcentagem de um valor', () => {
    cy.get('#porc1').type('10')
    cy.get('#porc2').type('100')
    cy.get('#calcularPorc1').click()

    cy.get('#outPorc1').should('be.visible').and('have.text', '10,00')
  })

  it('capturando o alerta ao preencher input de porcentagem', () => {
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

  it('preenchimento de formulário de somar porcentagem a um valor', () => {
    cy.get('#porc3').type('100')
    cy.get('#porc4').type('10')
    cy.get('#calcularPorc2').click()

    cy.get('#outPorc2').should('be.visible').and('have.text', '110,00')
  })

  it('capturando o alerta ao preencher input de soma de porcentagem', () => {
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

  it('preenchimento de formulários de Celsius para Fahrenheit', () => {
    cy.get('#celsius').type('-9.44', {delay: 0})
    cy.get('#celsiusPara').click()

    cy.get('#fahren').should('be.visible').and('have.text', '15,01 °F')
  })

  it('capturando o alerta ao preencher input com caracteres não aceitos pela aplicação', () => {
    cy.get('#celsius').type('abc')
    cy.get('#celsiusPara').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, insira apenas valores numéricos!')
    })
  })

  it('preenchimento de formulários de Fahrenheit para Celsius', () => {
    cy.get('#fahrenInput').type('15')
    cy.get('#fahrenPara').click()

    cy.get('#celsiusOutput').should('be.visible').and('have.text', '-9,44 °C')
  })
})