import { useAppSelector } from '../../store/store';
import css from './score.module.css';

const Score = () => {
  const score = useAppSelector((state) => state.game.score);

  return (
    <div className={css['score']}>
      <span>Score</span>
      <span>{score}</span>
    </div>
  );
};

export default Score;
