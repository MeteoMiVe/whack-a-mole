import { useEffect, useState } from 'react';

import { GAME_DURATION } from '../../config/game-config';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { setGameState } from '../../store/features/game/gameSlice';
import { useAppDispatch } from '../../store/store';
import css from './game-timer.module.css';

const GameTimer = () => {
  const [time, setTime] = useState(GAME_DURATION); // Game stops after given time

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Decrement every second (1000ms)
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        // End the game
        dispatch(setGameState('ended'));

        // Clear timer when countdown stops
        clearInterval(timer);
      }
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <WamSpan
      className={css['game-timer']}
      text={`${minutes.toString()}:${seconds.toString().padStart(2, '0')}`}
      color="green"
    />
  );
};

export default GameTimer;
