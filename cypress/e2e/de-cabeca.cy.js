describe('De Cabeça - Sua Calculadora Online', () => {
  beforeEach(() => {
    cy.visit('https://luiz-barros-92.github.io/de-cabeca/')
  })

  it('verificar o titulo', () => {    
    cy.title().should('eq', 'De Cabeça - Sua Calculadora Online')
  })

  it('preenchimento de formulários de Fahrenheit para Celsius', () => {
    cy.get('#fahrenInput').type('15', {delay: 0})
    cy.get('#fahrenPara').click()

    cy.get('#celsiusOutput').should('be.visible').and('have.text', '-9,44 °C')
  })
})