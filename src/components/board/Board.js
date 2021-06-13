import React from 'react';
import './Board.css';

/**
 * Board of the 4Wins game, Contains a grid and the gameplay logic
 */
class Board extends React.Component {
  /**
   * Constructor that initializes a state with
   * the current state of the game and the active player.
   * The Player can be 'X' or 'O'.
   * @param {object} props The properties given to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(6).fill(new Array(7).fill(null)),
      activePlayer: 'X',
    };
  }

  /**
   * EventHandler for click on a cell.
   * Sets the stone into the first non empty row (from botton)
   * Sets the current player
   * @param {Number} colIndex The column that was clicked on.
   */
  handleColumnClick(colIndex) {
    for (let row = this.state.board.length - 1; row >= 0; row--) {
      if (!this.state.board[row][colIndex]) {
        const newField = this.state.board.map((col) => col.slice()).slice();
        newField[row][colIndex] = this.state.activePlayer;
        const nextPlayer = this.state.activePlayer === 'X' ? 'O': 'X';
        this.setState({board: newField, activePlayer: nextPlayer});
        return;
      }
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    return (
      <div><table cellSpacing="0">
        <tbody>{ this.state.board.map((col, rowIndex) =>
          <tr key={rowIndex}>{col.map((cellValue, colIndex) =>
            <td key={colIndex}
              onClick={() => this.handleColumnClick(colIndex)}>
              {cellValue}
            </td>,
          )}</tr>,
        )}</tbody>
      </table></div>
    );
  }
}

export default Board;
