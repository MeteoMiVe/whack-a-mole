import FlexElements from '../../design-library/FlexElements/FlexElements';
import { useAppSelector } from '../../store/store';
import useUUID from '../../utils/hooks/useUUID';
import Mole from '../Mole/Mole';
import css from './mole-grid.module.css';

const MoleGrid = () => {
  const moleVisibilities = useAppSelector((state) => state.game.moleVisibilities);

  const mapKeys = useUUID(moleVisibilities.length);

  return (
    <FlexElements className={css['mole-grid-wrapper']} justifyContent="center" alignItems="center">
      <div className={css['mole-grid']}>
        {moleVisibilities.map((isVisible, index) => (
          <Mole key={`mole-${mapKeys[index]}`} index={index} isVisible={isVisible} />
        ))}
      </div>
    </FlexElements>
  );
};

export default MoleGrid;
