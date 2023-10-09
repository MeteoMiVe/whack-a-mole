import Dialog from '../../design-library/Dialog/Dialog';
import FlexElements from '../../design-library/FlexElements/FlexElements';
import WamButton from '../../design-library/WamButton/WamButton';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { startNewGame } from '../../store/features/game/gameSlice';
import { useAppDispatch } from '../../store/store';
import { playWhackSound } from '../../utils/functions/sounds';
import ScoreList from '../ScoreList/ScoreList';

const LeaderBoard = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // Play whack sound
    playWhackSound();
    // Start new game
    dispatch(startNewGame());
  };

  return (
    <Dialog>
      <WamSpan dataTestId="txt-leader-board" text="Leaderboard" color="red" />
      <ScoreList />
      <FlexElements justifyContent="center">
        <WamButton dataTestId="btn-next-game" text="Whack me for a new game!" onClick={handleClick} />
      </FlexElements>
    </Dialog>
  );
};

export default LeaderBoard;
