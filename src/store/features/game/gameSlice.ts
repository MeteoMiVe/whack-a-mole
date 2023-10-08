import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateRandomNumber } from '../../../utils/functions/numbers';

/**
 * Represents the 3 possible states of the game:
 * - 'waiting' for a player to press start
 * - 'running' while the player is playing the game
 * - 'ended' when time has run out, name popup shows and leader board is shown
 */
export type GameState = 'waiting' | 'running' | 'ended';

export type GameSliceState = {
  gameState: GameState;
  score: number;
  moleVisibilities: boolean[];
};

// Show a random mole on init
const initialMoleVisibilities = new Array(12).fill(false);
initialMoleVisibilities[generateRandomNumber(0, 11)] = true;

const initialState: GameSliceState = {
  gameState: 'running',
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
      state.moleVisibilities[generateRandomNumber(0, 11)] = true;
    },
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    }
  }
});

export const { whackMole, setGameState } = gameSlice.actions;

export default gameSlice;
