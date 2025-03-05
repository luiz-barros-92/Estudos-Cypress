describe('De Cabeça - Sua Calculadora Online', () => {
  beforeEach(() => {
    cy.visit('./de-cabeca/index.html')
  })

  it('verificar o titulo', () => {    
    cy.title().should('eq', 'De Cabeça - Sua Calculadora Online')
  })

  it('preenchimento de formulário de Porcentagem de um valor', () => {
    cy.porc1()    
  })

  it('capturando o alerta ao preencher input de porcentagem', () => {
    cy.erroPorc1e2()    
  })

  it('preenchimento de formulário de somar porcentagem a um valor', () => {
    cy.somaPorc()    
  })

  it('capturando o alerta ao preencher input de soma de porcentagem', () => {
    cy.erroPorc3e4()
  })

  it('preenchimento de formulário de subtrair porcentagem a um valor', () => {
    cy.subtraiPorc()
  })
  
  it('capturando o alerta ao preencher input de subtração de porcentagem', () => {
    cy.erroPorc5e6()
  })

  it('preenchimento de formulario de calculadora de raio', () => {
    cy.geometriaRaio()
  })

  it('teste de erro de inserção de caracteres inválidos', () => {
    cy.erroGeometriaRaio()    
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

  it('capturando o alerta ao preencher input com caracteres de Fahrenheit não aceitos pela aplicação', () => {
    cy.get('#fahrenInput').type('abc')
    cy.get('#fahrenPara').click()
  
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, insira apenas valores numéricos!')
    })
  })
})

