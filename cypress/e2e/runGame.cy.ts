import { GAME_DURATION } from '../../src/config/game-config';
import { gameIsRunning, visitGame } from '../fixtures/fixtures';

describe('Run entire game', () => {
  it('Should render the StartScreen with start button', () => {
    // Launch game
    visitGame();

    // Check if 'Start game button' exists
    const newGameBtn = cy.get('[data-test-id="btn-new-game"]');
    newGameBtn.should('exist').should('have.text', 'Start game');

    // Start the game
    newGameBtn.click();

    // Check if the game is running => Score text is visible
    gameIsRunning();

    // Wait for 2 minutes (with 5s margin) until the game ends
    // Convert to milliseconds
    cy.wait(GAME_DURATION + 5 * 1000);

    // Enter player name
    const playerNameInput = cy.get('[data-test-id="player-name"]');
    playerNameInput.should('exist');
    playerNameInput.type('Cypress test');

    // Check if 'Submit button' exists
    const submitBtn = cy.get('[data-test-id="btn-submit-player-name"]');
    submitBtn.should('exist').should('have.text', 'Submit my score');

    // Submit
    submitBtn.click();

    // Wait for API call
    cy.intercept('POST', '*api/scores').then(() => {
      // Check if Leaderboard is rendered => Leaderboard text is visible
      cy.get('[data-test-id="txt-leader-board"]').should('exist').should('have.text', 'Leaderboard');

      // Check if 'Whack me for a new game' exists
      const nextGameBtn = cy.get('[data-test-id="btn-next-game"]');
      nextGameBtn.should('exist').should('have.text', 'Whack me for a new game!');

      // Start new game
      nextGameBtn.click();

      // Check if the game is running => Score text is visible
      gameIsRunning();
    });
  });
});
