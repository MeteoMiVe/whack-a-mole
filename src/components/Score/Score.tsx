import React from 'react';

import css from './score.module.css';

const Score = () => {
  return (
    <div className={css['score']}>
      <span>Score</span>
      <span>37829</span>
    </div>
  );
};

export default Score;
