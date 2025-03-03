describe('De Cabeça - Sua Calculadora Online', () => {
  beforeEach(() => {
    cy.visit('./de-cabeca/index.html')
  })

  it('verificar o titulo', () => {    
    cy.title().should('eq', 'De Cabeça - Sua Calculadora Online')
  })

  it('preenchimento de formulário de Porcentagem de um valor', () => {
    cy.porc1()

    cy.get('#outPorc1').should('be.visible').and('have.text', '10,00')
  })

  it('capturando o alerta ao preencher input de porcentagem', () => {
    cy.erroPorc1e2()    
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

  it('preenchimento de formulário de subtrair porcentagem a um valor', () => {
    cy.get('#porc5').type('100')
    cy.get('#porc6').type('10')
    cy.get('#calcularPorc3').click()

    cy.get('#outPorc3').should('be.visible').and('have.text', '90,00')
  })
  
  it('capturando o alerta ao preencher input de subtração de porcentagem', () => {
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

  it('preenchimento de formulario de calculadora de raio', () => {
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

  it('teste de erro de inserção de caracteres inválidos', () => {
    cy.erroGeometria()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, insira apenas valores numéricos positivos!')
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

  it('capturando o alerta ao preencher input com caracteres de Fahrenheit não aceitos pela aplicação', () => {
    cy.get('#fahrenInput').type('abc')
    cy.get('#fahrenPara').click()
  
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, insira apenas valores numéricos!')
    })
  })
})

