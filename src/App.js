import React, {useState} from 'react';
import Board from './components/board/Board.js';
import Header from './components/header/Header.js';

/**
 * Base component of the 4 Wins Game Application
 * @return {Object} React Elements that create the application
 */
function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [won, setWon] = useState(false);

  const onMoveFinished = (event) => {
    if (event.won) {
      setWon(true);
    } else {
      setCurrentPlayer( currentPlayer === 'X' ? 'O': 'X' );
    }
  };

  return (
    <div>
      <Header player={currentPlayer} won={won} />
      <Board player={currentPlayer}
        won={won}
        onMoveFinished={(e)=>onMoveFinished(e)} />
    </div>
  );
}

export default App;

