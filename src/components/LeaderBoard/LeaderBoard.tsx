import whackSound from '../../assets/sounds/whack.mp3';
import FlexElements from '../../design-library/FlexElements/FlexElements';
import WamButton from '../../design-library/WamButton/WamButton';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { startNewGame } from '../../store/features/game/gameSlice';
import { useAppDispatch } from '../../store/store';
import { playSound } from '../../utils/functions/sounds';
import ScoreList from '../ScoreList/ScoreList';
import css from './leader-board.module.css';

const LeaderBoard = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // Play whack sound
    playSound(whackSound);
    // Start new game
    dispatch(startNewGame());
  };

  return (
    <FlexElements className={css['leader-board-wrapper']} justifyContent="center" alignItems="center">
      <FlexElements className={css['leader-board']} flexDirection="column">
        <WamSpan text="Leaderboard" color="red" />
        <ScoreList />
        <FlexElements justifyContent="center">
          <WamButton id="btn-new-game" text="Whack me for a new game!" onClick={handleClick} />
        </FlexElements>
      </FlexElements>
    </FlexElements>
  );
};

export default LeaderBoard;
