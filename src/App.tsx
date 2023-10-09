import './App.css';

import Game from './components/Game/Game';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import { GameState } from './store/features/game/gameSlice';
import { useAppSelector } from './store/store';

const App = () => {
  const gameState = useAppSelector((state) => state.game.gameState);

  const componentMap: Record<GameState, JSX.Element | null> = {
    waiting: null,
    running: <Game />,
    ended: <LeaderBoard />
  };

  return <div className="App">{componentMap[gameState]}</div>;
};

export default App;
