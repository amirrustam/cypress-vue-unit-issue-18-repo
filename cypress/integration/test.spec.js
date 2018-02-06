import HelloWorld from '../../src/components/HelloWorld.vue'
import mountVue from 'cypress-vue-unit-test'

describe('HelloWorld', function () {
  beforeEach(mountVue(HelloWorld))
  it('has ecosystem', function () {
    cy.window().then(() => console.log(Cypress.vue))
  })
})