import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AddScoreRequest, AddScoreRequestRejectedPayload, Score } from '../../../api-types/scores';
import { API_ENDPOINT } from '../../../config/game-config';

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
  axios.get<Score[]>(API_ENDPOINT).then((res) => res.data)
);

export const addScore = createAsyncThunk('leaderBoard/addScore', (requestBody: AddScoreRequest, { rejectWithValue }) =>
  axios
    .post<Score>(API_ENDPOINT, requestBody)
    .then((res) => res.data)
    .catch((e: Error) => rejectWithValue(e))
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
    builder.addCase(addScore.rejected, (state, action) => {
      const rejectedPayload = action.payload as AddScoreRequestRejectedPayload;
      state.error = rejectedPayload.response.data.message;
    });
  }
});

export default leaderBoardSlice;
