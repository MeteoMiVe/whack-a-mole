import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateRandomNumber, generateRandomNumberFromPrevious } from '../../../utils/functions/numbers';

/**
 * Represents the 4 possible states of the game:
 * - 'waiting' for a player to press start
 * - 'running' while the player is playing the game
 * - 'ended' when time has run out and name popup shows
 * - 'leaderBoard' when the player submitted his/her name and leaderBoard is shown
 */
export type GameState = 'waiting' | 'running' | 'ended' | 'leaderBoard';

export type GameSliceState = {
  gameState: GameState;
  score: number;
  moleVisibilities: boolean[];
};

const initialMoleVisibilities = new Array(12).fill(false);

// Show a random mole on init
initialMoleVisibilities[generateRandomNumber()] = true;

const initialState: GameSliceState = {
  gameState: 'waiting',
  score: 0,
  moleVisibilities: initialMoleVisibilities
};

/**
 * Slice representing global game state
 */
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    whackMole: (state, action: PayloadAction<number>) => {
      // Hide the whacked mole
      state.moleVisibilities[action.payload] = false;
      // Add to our score
      state.score += 100;
      // Show a new random mole
      state.moleVisibilities[generateRandomNumberFromPrevious(action.payload)] = true;
    },
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
    startNewGame: (state) => {
      state.gameState = 'running';
      // Reset score
      state.score = 0;
    },
    showNewMole: (state, action: PayloadAction<number>) => {
      // Hide current mole
      state.moleVisibilities[action.payload] = false;
      // Show a new random mole
      state.moleVisibilities[generateRandomNumberFromPrevious(action.payload)] = true;
    }
  }
});

export const { whackMole, setGameState, startNewGame, showNewMole } = gameSlice.actions;

export default gameSlice;
