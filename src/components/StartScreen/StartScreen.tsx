import moleImg from '../../assets/images/WAM_Mole.png';
import Dialog from '../../design-library/Dialog/Dialog';
import FlexElements from '../../design-library/FlexElements/FlexElements';
import WamButton from '../../design-library/WamButton/WamButton';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { setGameState } from '../../store/features/game/gameSlice';
import { useAppDispatch } from '../../store/store';
import { playWhackSound } from '../../utils/functions/sounds';
import css from './start-screen.module.css';

const StartScreen = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // Play whack sound
    playWhackSound();

    // Start game
    dispatch(setGameState('running'));
  };

  const mole = <img src={moleImg} />;

  return (
    <Dialog>
      <FlexElements className={css['start-screen']} alignItems="center">
        {mole}

        <div>
          <WamSpan text="<< Wack a mole! >>" color="red" />
          <FlexElements justifyContent="center">
            <WamButton id="btn-new-game" text="Start game" onClick={handleClick} />
          </FlexElements>
        </div>

        {mole}
      </FlexElements>
    </Dialog>
  );
};

export default StartScreen;
