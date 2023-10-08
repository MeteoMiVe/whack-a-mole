import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

const initialState: GameSliceState = {
  gameState: 'running',
  score: 0,
  moleVisibilities: new Array(12).fill(false)
};

/**
 * Slice representing global game state like playing time and score
 */
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addToScore: (state) => {
      state.score += 100;
    },
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    }
  }
});

export const { addToScore, setGameState } = gameSlice.actions;

export default gameSlice;
