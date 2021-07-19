/// <reference types="cypress" />

describe('Dummy test - @TES-T5968', { tags: '@TES-T5968' }, () => {
  it('this test will pass', () => {
    cy.log(Cypress.env('test'))
  })
})