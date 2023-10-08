import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type Score = {
  id: string;
  playerName: string;
  score: number;
  timeStamp: string;
};

export type LeaderBoardSliceState = {
  loading: boolean;
  scores: Score[];
  error: string;
};

const initialState: LeaderBoardSliceState = {
  loading: false,
  scores: [],
  error: ''
};

export const fetchScores = createAsyncThunk('leaderBoard/fetchScores', () =>
  axios.get<Score[]>('http://localhost:5000/api/scores').then((res) => res.data)
);

/**
 * Slice representing the LeaderBoard with high scores
 */
export const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchScores.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchScores.fulfilled, (state, action) => {
      state.loading = false;
      state.scores = action.payload;
    });
    builder.addCase(fetchScores.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch scores, unknown error';
    });
  }
});

export default leaderBoardSlice;
