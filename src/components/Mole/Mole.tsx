import holeImg from '../../assets/images/WAM_Hole.png';
import moleImg from '../../assets/images/WAM_Mole.png';
import whackSound from '../../assets/sounds/whack.mp3';
import { addToScore } from '../../store/features/game/gameSlice';
import { useAppDispatch } from '../../store/store';
import css from './mole.module.css';

type Props = {
  isVisible: boolean;
};

const Mole = (props: Props) => {
  const { isVisible = false } = props;

  const dispatch = useAppDispatch();

  const whack = () => {
    if (isVisible) {
      // Play the whack sound
      const audio = new Audio(whackSound);
      audio.play();

      // Update our score
      dispatch(addToScore());
    }
  };

  return (
    <div className={css['mole']}>
      <img src={isVisible ? moleImg : holeImg} onClick={whack} />
    </div>
  );
};

export default Mole;
