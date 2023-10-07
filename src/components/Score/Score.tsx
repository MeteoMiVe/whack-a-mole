import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import css from './score.module.css';

const Score = () => {
  const score = useSelector((state: RootState) => state.game.score);

  return (
    <div className={css['score']}>
      <span>Score</span>
      <span>{score}</span>
    </div>
  );
};

export default Score;
