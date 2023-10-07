import React from 'react';

import holeImg from '../../assets/images/WAM_Hole.png';
import moleImg from '../../assets/images/WAM_Mole.png';
import css from './mole.module.css';

type Props = {
  isVisible: boolean;
};

const Mole = (props: Props) => {
  const { isVisible = false } = props;

  return (
    <div className={css['mole']}>
      <img src={isVisible ? moleImg : holeImg} />
    </div>
  );
};

export default Mole;
