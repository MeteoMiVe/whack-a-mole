import React from 'react';

import holeImg from '../../assets/images/WAM_Hole.png';
import moleImg from '../../assets/images/WAM_Mole.png';
import whackSound from '../../assets/sounds/whack.mp3';
import css from './mole.module.css';

type Props = {
  isVisible: boolean;
};

const Mole = (props: Props) => {
  const { isVisible = false } = props;

  const playWhack = () => {
    if (isVisible) {
      const audio = new Audio(whackSound);
      audio.play();
    }
  };

  return (
    <div className={css['mole']}>
      <img src={isVisible ? moleImg : holeImg} onClick={playWhack} />
    </div>
  );
};

export default Mole;
