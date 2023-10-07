import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

/**
 * Slice representing global game state like playing time and score
 */
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {}
});

// export const {} = gameSlice.actions;

export default gameSlice.reducer;
