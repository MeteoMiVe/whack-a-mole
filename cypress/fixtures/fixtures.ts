// Launch game
export const visitGame = () => {
  cy.visit('http://localhost:3000/');
};

// Check if the game is running => Score text is visible
export const gameIsRunning = () => {
  cy.get('[data-test-id="txt-score"]').should('exist').should('have.text', 'Score');
};
