import { useEffect } from 'react';

import { fetchScores } from '../../store/features/leader-board/leaderBoardSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import css from './leader-board.module.css';

const LeaderBoard = () => {
  const dispatch = useAppDispatch();

  const leaderBoardState = useAppSelector((state) => state.leaderBoard);

  useEffect(() => {
    dispatch(fetchScores());
  }, []);

  if (leaderBoardState.loading) return <p>Loading</p>;

  return <div className={css['leader-board']}>Success!</div>;
};

export default LeaderBoard;
