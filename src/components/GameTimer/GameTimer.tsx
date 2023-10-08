import { useEffect, useState } from 'react';

import WamSpan from '../../design-library/WamSpan/WamSpan';
import css from './game-timer.module.css';

const GameTimer = () => {
  const [time, setTime] = useState(120); // Game stops after 2 minutes (120s)

  useEffect(() => {
    // Decrement every second (1000ms)
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
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
