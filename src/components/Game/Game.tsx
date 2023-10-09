import GameTimer from '../GameTimer/GameTimer';
import MoleGrid from '../MoleGrid/MoleGrid';
import Score from '../Score/Score';

const Game = () => {
  return (
    <>
      <Score />
      <MoleGrid />
      <GameTimer />
    </>
  );
};

export default Game;
