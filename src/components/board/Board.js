import React from 'react';
import './Board.css';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: new Array(6).fill(new Array(7).fill(null)),
            activePlayer: 'X'
        };
    }

    handleColumnClick(colIndex) {
      for (let row = this.state.board.length - 1; row >= 0; row--) {
        if (!this.state.board[row][colIndex]) {
          const newField = this.state.board.map((col) => col.slice()).slice();
          newField[row][colIndex] = this.state.activePlayer;
          const nextPlayer = this.state.activePlayer === 'X' ? 'O': 'X';
          this.setState({ board: newField, activePlayer: nextPlayer });
          return;
        }
      }
    }

    render() {
        return (
            <div><table cellSpacing="0">
                    <tbody>{ this.state.board.map((col, rowIndex) => 
                        <tr key={rowIndex}>{col.map((cellValue, colIndex) =>
                            <td key={colIndex} 
                                onClick={() => this.handleColumnClick(colIndex)}> 
                                {cellValue}
                            </td>
                        )}</tr>
                )}</tbody>
            </table></div>
        )
    }
}

export default Board;
