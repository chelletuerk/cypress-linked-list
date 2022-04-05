describe('linked-list', () => {
  it('displays zero todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.card').should('have.length', 0)
  })
})
