import FlexElements from '../../design-library/FlexElements/FlexElements';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import ScoreList from '../ScoreList/ScoreList';
import css from './leader-board.module.css';

const LeaderBoard = () => {
  return (
    <FlexElements className={css['leader-board-wrapper']} justifyContent="center" alignItems="center">
      <FlexElements className={css['leader-board']} flexDirection="column">
        <WamSpan text="Leaderboard" color="red" />
        <ScoreList />
      </FlexElements>
    </FlexElements>
  );
};

export default LeaderBoard;
