import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import useUUID from '../../utils/hooks/useUUID';
import Mole from '../Mole/Mole';
import css from './mole-grid.module.css';

const MoleGrid = () => {
  const moleVisibilities = useSelector((state: RootState) => state.game.moleVisibilities);

  const mapKeys = useUUID(moleVisibilities.length);

  return (
    <div className={css['mole-grid']}>
      {moleVisibilities.map((mv, index) => (
        <Mole key={`mole-${mapKeys[index]}`} isVisible={mv} />
      ))}
    </div>
  );
};

export default MoleGrid;
