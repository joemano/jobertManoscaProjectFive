import React, { Component } from 'react';

class Board extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return(
      <div className="gameBoard">
        <div className="gameGrid">
          {this.props.board}
        </div>
      </div>
    );
  }
}

export default Board;