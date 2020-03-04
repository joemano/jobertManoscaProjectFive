import React, { Component } from 'react';

class Instructions extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="instructions container">
        <h2>Rules</h2>
        <ul className="rules">
          <li>
            <h3>Rule 1</h3>
            <p>All cards are shown at the start, then hidden. Clicking any card starts the timer and flips the card.</p>
          </li>
          <li>
            <h3>Rule 2</h3>
            <p>Now click a second card to turn it over. Turning over 2 of the same card will solve the pair. A mismatched pair will un-flip both cards.</p>
          </li>
          <li>
            <h3>Rule 3</h3>
            <p>Once all pairs are solved, you win!</p>
          </li>
          <li>
            <h3>Rule 4</h3>
            <p>You can restart the game as much as you like.</p>
          </li>
          <li>
            <h3>Rule 5</h3>
            <p>Your best time is recorded at the top of the game board</p>
          </li>
        </ul>
        <div className="controls">
          <h3>Keyboard Controls</h3>
          <p>
            Press Tab until a card is selected and then you can use the arrow keys to navigate.
          </p>
          <p>Press ENTER or SPACEBAR to flip a card.</p>
        </div>
        <button className="backButton" onClick={this.props.close}>back</button>
      </div>
    );
  }
}

export default Instructions;