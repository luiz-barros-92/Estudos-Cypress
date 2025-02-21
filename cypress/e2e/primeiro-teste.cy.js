describe('De Cabeça - Sua Calculadora Online', () => {
  it('verificar o titulo', () => {
    cy.visit('https://luiz-barros-92.github.io/de-cabeca/')
    cy.title().should('eq', 'De Cabeça - Sua Calculadora Online')
  })
})