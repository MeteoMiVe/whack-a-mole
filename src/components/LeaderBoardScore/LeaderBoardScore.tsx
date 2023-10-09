import { Score } from '../../api-types/scores';
import FlexElements from '../../design-library/FlexElements/FlexElements';
import css from './leader-board-score.module.css';

type Props = {
  index: number;
  score: Score;
};

const LeaderBoardScore = (props: Props) => {
  const { index, score } = props;

  return (
    <FlexElements className={css['leader-board-score']} justifyContent="space-between">
      <FlexElements>
        <span>{`${index + 1}.`}</span>
        <span>{score.playerName}</span>
      </FlexElements>

      <span>{score.score}</span>
    </FlexElements>
  );
};

export default LeaderBoardScore;
