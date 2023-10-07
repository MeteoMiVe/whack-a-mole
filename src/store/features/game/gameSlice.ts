import { createSlice } from '@reduxjs/toolkit';

export type GameSliceState = {
  score: number;
  moleVisibilities: boolean[];
};

const initialState: GameSliceState = {
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
    }
  }
});

export const { addToScore } = gameSlice.actions;

export default gameSlice;
