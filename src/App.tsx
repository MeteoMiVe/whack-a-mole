import './App.css';

import Game from './components/Game/Game';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import ScoreForm from './components/ScoreForm/ScoreForm';
import { GameState } from './store/features/game/gameSlice';
//import { useAppSelector } from './store/store';

/**
 * Renders the correct comonent based on current GameState
 */
const App = () => {
  // const gameState = useAppSelector((state) => state.game.gameState);

  const componentMap: Record<GameState, JSX.Element | null> = {
    waiting: null,
    running: <Game />,
    ended: <ScoreForm />,
    leaderBoard: <LeaderBoard />
  };

  return <div className="App">{componentMap['ended']}</div>;
};

export default App;
