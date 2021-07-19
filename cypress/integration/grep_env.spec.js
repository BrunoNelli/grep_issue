/// <reference types="cypress" />

describe('Dummy test - @TES-T5967', { tags: '@TES-T5967' }, () => {
  it('this test should pass if configFile=HMP', () => {
    cy.log(Cypress.env('test'))
    expect(Cypress.env('test')).to.eql('This is a hmp ENV')
  })
})