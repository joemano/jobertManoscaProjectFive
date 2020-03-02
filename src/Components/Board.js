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
        {/* The ugly callback is there to prevent ghost images when dragging */}
        <div className="gameGrid" onDragStart={(e) => {e.preventDefault()}}>
          {this.props.board}
        </div>
      </div>
    );
  }
}

export default Board;