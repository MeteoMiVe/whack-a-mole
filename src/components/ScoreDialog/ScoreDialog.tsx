import Dialog from '../../design-library/Dialog/Dialog';
import WamSpan from '../../design-library/WamSpan/WamSpan';
import { useAppSelector } from '../../store/store';
import ScoreForm from '../ScoreForm/ScoreForm';

const ScoreDialog = () => {
  const score = useAppSelector((state) => state.game.score);

  return (
    <Dialog>
      <WamSpan text="Time's up!" color="red" />
      <span>{`Your score: ${score}`}</span>
      <ScoreForm />
    </Dialog>
  );
};

export default ScoreDialog;
