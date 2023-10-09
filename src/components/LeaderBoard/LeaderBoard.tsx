import whackSound from '../../assets/sounds/whack.mp3';
import Dialog from '../../design-library/Dialog/Dialog';
import FlexElements from '../../design-library/FlexElements/FlexElements';
import WamButton from '../../design-library/WamButton/WamButton';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { startNewGame } from '../../store/features/game/gameSlice';
import { useAppDispatch } from '../../store/store';
import { playSound } from '../../utils/functions/sounds';
import ScoreList from '../ScoreList/ScoreList';

const LeaderBoard = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // Play whack sound
    playSound(whackSound);
    // Start new game
    dispatch(startNewGame());
  };

  return (
    <Dialog>
      <WamSpan text="Leaderboard" color="red" />
      <ScoreList />
      <FlexElements justifyContent="center">
        <WamButton id="btn-new-game" text="Whack me for a new game!" onClick={handleClick} />
      </FlexElements>
    </Dialog>
  );
};

export default LeaderBoard;
