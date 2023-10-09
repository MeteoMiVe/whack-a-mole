import { useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';

import FlexElements from '../../design-library/FlexElements/FlexElements';
import { fetchScores } from '../../store/features/leader-board/leaderBoardSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import LeaderBoardScore from '../LeaderBoardScore/LeaderBoardScore';
import css from './score-list.module.css';
import WamSpan from '../../design-library/WamSpan/WamSpan';

const ScoreList = () => {
  const dispatch = useAppDispatch();

  const leaderBoardState = useAppSelector((state) => state.leaderBoard);
  const { loading, error, scores } = leaderBoardState;

  useEffect(() => {
    dispatch(fetchScores());
  }, []);

  if (loading) {
    return (
      <FlexElements className={css['loader']} justifyContent="center" alignItems="center" gap="4.8rem">
        <PacmanLoader color="white" size={24} />
        <span>Loading high scores...</span>
      </FlexElements>
    );
  }

  if (error) {
    return <WamSpan className={css['error']} text={error} color="red" />;
  }

  return (
    <div className={css['score-list']}>
      {scores.map((score, index) => (
        <LeaderBoardScore key={score._id} index={index} score={score} />
      ))}
    </div>
  );
};

export default ScoreList;
