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
  
  it('capturando o alerta ao preencher apenas um campo de input de subtração de porcentagem, deixando o outro vazio', () => {
    cy.erroPorc5e6()
  })

  it('preenchimento de formulario de calculadora de raio', () => {
    cy.geometriaRaio()
  })

  it('teste de erro de inserção de caracteres inválidos', () => {
    cy.erroGeometriaRaio()    
  })

  it('testando happy path na calculadora de regra de 3 simples', () => {
    cy.regra3Simp()
  })

  it('teste de erro nos campos de regra de 3 simples', () => {
    cy.erroRegra3Simp()
  })

  it('preenchimento de formulários de Celsius para Fahrenheit', () => {
    cy.celsiusPara()
  })

  it('capturando o alerta ao preencher input com caracteres não aceitos pela aplicação', () => {
    cy.erroCelsiusPara()
  })

  it('preenchimento de formulários de Fahrenheit para Celsius', () => {
    cy.fahrenPara()
  })

  it('capturando o alerta ao preencher input com caracteres de Fahrenheit não aceitos pela aplicação', () => {
    cy.errofahrenPara()
  })

  it('capturando alerta ao clicar em um botão com input vazio', () => {
    cy.inputVazio()
  })
})