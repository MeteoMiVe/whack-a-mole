import React, { useState } from 'react';

import useUUID from '../../utils/hooks/useUUID';
import Mole from '../Mole/Mole';
import css from './mole-grid.module.css';

const MoleGrid = () => {
  const [moleVisibilities] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

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
