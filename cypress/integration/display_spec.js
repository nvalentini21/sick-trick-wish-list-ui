describe('Dashboard', () => {

  it('Should be able to visit the site and render a title, form, and trick cards', () =>{
    cy.visit('http://localhost:3000')
      .contains('Sick Trick Wish List')
      .get('form').should('be.visible')
      .get('.card').eq(0).should('be.visible')
      .contains('regular treflip')
  })
});
