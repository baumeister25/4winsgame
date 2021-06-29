import React from 'react';
import PropTypes from 'prop-types';

/**
 * This class represents the header of the 4win game.
 */
class Header extends React.Component {
  /**
   * Constructor taking properties.
   * @param {Object} props Should contain the current 'player'
   */
  constructor(props) {
    super(props);
  }

  /**
   * @inheritDoc
   */
  render() {
    const playing = <h1>It&apos;s your turn player {this.props.player}</h1>;
    const winner = <h1>Player {this.props.player} won the game</h1>;
    const text = this.props.won ? winner: playing;
    return (
      text
    );
  }
}

Header.propTypes = {
  player: PropTypes.string,
  won: PropTypes.bool,
};
export default Header;

