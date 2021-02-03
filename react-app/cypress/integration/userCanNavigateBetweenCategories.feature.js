describe('User can view courses by a category', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When user clicks "Workshops" category', () => {
    beforeEach(() => {
      cy.get('[data-cy="workshops"]').click()
    })

    it('User can see courses of workshops category', () => {
      cy.get('div').should('contain', 'Work The Web')
    })

    it('User can not see courses of "Testing" category', () => {
      cy.get('div').should('not.contain', 'Test Automation using Cypress')
    })
  })

  describe('When user clicks "Testing" category', () => {
    beforeEach(() => {
      cy.get('[data-cy="testing"]').click()
    })

    it('User can see courses of testing category', () => {
      cy.get('div').should('contain', 'Test Automation using Cypress')
    })

    it('User can not see courses of "Workshops" category', () => {
      cy.get('div').should('not.contain', 'Work The Web')
    })
  })

  describe('When user clicks "All"', () => {
    beforeEach(() => {
      cy.get('[data-cy="all"]').click()
    })

    it('User can see a list of all courses', () => {
      cy.get('[data-cy="app"]')
        .should('contain', 'Work The Web')
        .and('contain', 'Test Automation using Cypress')
        .and('contain', 'Introduction to VUE3')
        .and('contain', 'Building Web Applications using VUE 3')
        .and('contain', 'Version Control with Git')
        .and('contain', 'API development with NodeJS')
        .and('contain', 'ReactJs - Getting Started (2020 edition)')
    })
  })
})
