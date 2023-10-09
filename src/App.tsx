import './App.css';

import Game from './components/Game/Game';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import ScoreDialog from './components/ScoreDialog/ScoreDialog';
import StartScreen from './components/StartScreen/StartScreen';
import { GameState } from './store/features/game/gameSlice';
import { useAppSelector } from './store/store';

/**
 * Renders the correct comonent based on current GameState
 */
const App = () => {
  const gameState = useAppSelector((state) => state.game.gameState);

  const componentMap: Record<GameState, JSX.Element> = {
    waiting: <StartScreen />,
    running: <Game />,
    ended: <ScoreDialog />,
    leaderBoard: <LeaderBoard />
  };

  return <div className="App">{componentMap[gameState]}</div>;
};

export default App;
