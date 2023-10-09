import { useState } from 'react';

import Dialog from '../../design-library/Dialog/Dialog';
import FlexElements from '../../design-library/FlexElements/FlexElements';
import WamButton from '../../design-library/WamButton/WamButton';
import WamInput from '../../design-library/WamInput/WamInput';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { setGameState } from '../../store/features/game/gameSlice';
import { addScore } from '../../store/features/leader-board/leaderBoardSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { playWhackSound } from '../../utils/functions/sounds';

const ScoreForm = () => {
  const score = useAppSelector((state) => state.game.score);
  const error = useAppSelector((state) => state.leaderBoard.error);

  const dispatch = useAppDispatch();

  const [playerName, setPlayerName] = useState('');

  const handleClick = () => {
    // Play whack sound
    playWhackSound();

    // Send values to MongoDB
    dispatch(
      addScore({
        playerName,
        score
      })
    ).then(() => {
      if (!error) {
        // switch to leader board
        dispatch(setGameState('leaderBoard'));
      }
    });
  };

  return (
    <Dialog>
      <WamSpan text="Time's up!" color="red" />

      <span>{`Your score: ${score}`}</span>

      <span>Please enter your name:</span>
      <form>
        <WamInput id="player-name" type="text" value={playerName} onChange={setPlayerName} />
      </form>

      {error && <WamSpan text={`Error: ${error}`} color="red" />}

      <FlexElements justifyContent="center">
        <WamButton id="btn-new-game" text="Submit my score" disabled={!playerName} onClick={handleClick} />
      </FlexElements>
    </Dialog>
  );
};

export default ScoreForm;
