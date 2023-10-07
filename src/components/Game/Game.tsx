import React from 'react';

import MoleGrid from '../MoleGrid/MoleGrid';
import css from './game.module.css';

const Game = () => {
  return (
    <div className={css['game']}>
      <MoleGrid />
    </div>
  );
};

export default Game;
