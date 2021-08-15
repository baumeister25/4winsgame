import React from 'react';
import Board from './components/board/Board.js';
import Header from './components/header/Header.js';

/**
 * Base component of the 4 Wins Game Application
 */
class App extends React.Component {
  /**
   * Constructor of App component
   * @param {Object} props Properties for the App component
   */
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'X',
      won: false,
    };
  }

  /**
   * Handler method for the move finished event.
   * The event is thrown whenever a player finishes a move.
   * @param {Object} event The event containing the information
   *        whether the last move won the game
   */
  onMoveFinished(event) {
    if (event.won) {
      this.setState({won: true});
    } else {
      this.setState( {currentPlayer:
          this.state.currentPlayer === 'X' ? 'O': 'X'});
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    return (<div>
      <Header player={this.state.currentPlayer} won={this.state.won} />
      <Board player={this.state.currentPlayer}
        won={this.state.won}
        onMoveFinished={(e)=>this.onMoveFinished(e)} />
    </div>
    );
  }
}

export default App;

