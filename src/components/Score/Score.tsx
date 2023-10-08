import WamSpan from '../../design-library/WamSpan/WamSpan';
import { useAppSelector } from '../../store/store';
import css from './score.module.css';

const Score = () => {
  const score = useAppSelector((state) => state.game.score);

  return (
    <div className={css['score']}>
      <WamSpan text="Score" color="red" />
      <WamSpan text={score.toString()} />
    </div>
  );
};

export default Score;
