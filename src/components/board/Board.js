import React from 'react';
import './Board.css';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: new Array(6).fill(new Array(7).fill(null))
        }
    }
    render() {
        return (
            <div><table cellSpacing="0">
                    <tbody>{ this.state.board.map((col, rowIndex) => 
                        <tr key={rowIndex}>{col.map((cellValue, colIndex) =>
                            <td key={colIndex}> 
                                {cellValue}
                            </td>
                        )}</tr>
                )}</tbody>
            </table></div>
        )
    }
}

export default Board;
