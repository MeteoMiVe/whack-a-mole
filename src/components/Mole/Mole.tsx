import { useEffect } from 'react';

import holeImg from '../../assets/images/WAM_Hole.png';
import moleImg from '../../assets/images/WAM_Mole.png';
import { MOLE_TIMEOUT } from '../../config/game-config';
import { showNewMole, whackMole } from '../../store/features/game/gameSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { playWhackSound } from '../../utils/functions/sounds';
import css from './mole.module.css';

type Props = {
  index: number;
  isVisible: boolean;
};

const Mole = (props: Props) => {
  const { index, isVisible = false } = props;

  const gameState = useAppSelector((state) => state.game.gameState);
  const dispatch = useAppDispatch();

  const handleWhack = () => {
    if (isVisible) {
      // Play whack sound
      playWhackSound();

      // Update our score
      dispatch(whackMole(index));
    }
  };

  useEffect(() => {
    if (isVisible && gameState === 'running') {
      // Keep mole visible for given timeout
      const timeout = setTimeout(() => {
        dispatch(showNewMole(index));
      }, MOLE_TIMEOUT);

      // Clear interval on unmount
      return () => clearTimeout(timeout);
    }
  }, [isVisible, gameState]);

  return (
    <div className={css['mole']}>
      <img src={isVisible ? moleImg : holeImg} onClick={handleWhack} />
    </div>
  );
};

export default Mole;
