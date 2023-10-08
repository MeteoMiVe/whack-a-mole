import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import gameSlice from './features/game/gameSlice';
import leaderBoardSlice from './features/leader-board/leaderBoardSlice';

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    leaderBoard: leaderBoardSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
