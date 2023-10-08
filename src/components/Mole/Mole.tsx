import holeImg from '../../assets/images/WAM_Hole.png';
import moleImg from '../../assets/images/WAM_Mole.png';
import whackSound from '../../assets/sounds/whack.mp3';
import { whackMole } from '../../store/features/game/gameSlice';
import { useAppDispatch } from '../../store/store';
import css from './mole.module.css';

type Props = {
  index: number;
  isVisible: boolean;
};

const Mole = (props: Props) => {
  const { index, isVisible = false } = props;

  const dispatch = useAppDispatch();

  const handleWhack = () => {
    if (isVisible) {
      // Play the whack sound
      const audio = new Audio(whackSound);
      audio.play();

      // Update our score
      dispatch(whackMole(index));
    }
  };

  return (
    <div className={css['mole']}>
      <img src={isVisible ? moleImg : holeImg} onClick={handleWhack} />
    </div>
  );
};

export default Mole;
