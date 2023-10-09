import { useState } from 'react';

import whackSound from '../../assets/sounds/whack.mp3';
import Dialog from '../../design-library/Dialog/Dialog';
import FlexElements from '../../design-library/FlexElements/FlexElements';
import WamButton from '../../design-library/WamButton/WamButton';
import WamInput from '../../design-library/WamInput/WamInput';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { setGameState } from '../../store/features/game/gameSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { playSound } from '../../utils/functions/sounds';

//import css from './score-form.module.css';

const ScoreForm = () => {
  const score = useAppSelector((state) => state.game.score);
  const dispatch = useAppDispatch();

  const [playerName, setPlayerName] = useState('');

  const handleClick = () => {
    // Play whack sound
    playSound(whackSound);
    // switch to leader board
    dispatch(setGameState('leaderBoard'));
  };

  const handleSubmit = () => {};

  return (
    <Dialog>
      <WamSpan text="Time's up!" color="red" />

      <span>{`Your score: ${score}`}</span>

      <span>Please enter your name:</span>
      <form onSubmit={handleSubmit}>
        <WamInput id="player-name" type="text" value={playerName} onChange={setPlayerName} />
      </form>

      <FlexElements justifyContent="center">
        <WamButton id="btn-new-game" text="Submit my score" disabled={!playerName} onClick={handleClick} />
      </FlexElements>
    </Dialog>
  );
};

export default ScoreForm;
