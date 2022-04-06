describe('Form', () => {

  it('Should allow the user to input data, and hold onto that data via the value', () =>{
    cy.visit('http://localhost:3000')
      .get('form').should('be.visible')
      .get('.trick').type('Nicole')
      .should('have.value', 'Nicole')
      .get('.tutorial').type('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      .should('have.value', "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      .get('.stance').select('Regular')
      .should('have.value', "Regular")
      .get('.obstacle').select('Rail')
      .should('have.value', "Rail")
  })

  it('Should allow the user to input data, submit that trick, and see trick on dashboard', () =>{
    cy.visit('http://localhost:3000')
      .get('form').should('be.visible')
      .get('.trick').type('Nicole')
      .should('have.value', 'Nicole')
      .get('.tutorial').type('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      .should('have.value', "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      .get('.stance').select('Regular')
      .should('have.value', "Regular")
      .get('.obstacle').select('Rail')
      .should('have.value', "Rail")
      .get('button').click()
      .get('.card').eq(3).should('be.visible')
      .contains('Regular Nicole')
  })

  //Out of time but here's what else I would add:

  //Add a test to make sure the link to the trick video can be clicked on a card, and the user
  //is directed to a new url.

  //Also, I would go back and make my site match the comp better, because it currently does not.

  //I accidently pushed the interation3 branch to the wrong repo, adding this so I can re-push to my forked repo. 
});
