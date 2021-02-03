describe('User can view the structure of the main page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User can see the headline', () => {
    cy.get('[data-cy="app"]').within(() => {
      cy.get('h1').should('contain', 'Course list')
    })
  })

  it('User can see the category list', () => {
    cy.get('[data-cy="app"]').within(() => {
      cy.get('ul')
        .should('contain', 'workshops')
        .and('contain', 'testing')
        .and('contain', 'vue')
        .and('contain', 'productivity')
        .and('contain', 'node')
        .and('contain', 'react')
    })
  })

  it('User can see the course details', () => {
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
