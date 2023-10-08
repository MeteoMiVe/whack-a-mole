import GameTimer from '../GameTimer/GameTimer';
import MoleGrid from '../MoleGrid/MoleGrid';
import Score from '../Score/Score';
import css from './game.module.css';

const Game = () => {
  return (
    <>
      <Score />
      <div className={css['game']}>
        <MoleGrid />
      </div>
      <GameTimer />
    </>
  );
};

export default Game;
