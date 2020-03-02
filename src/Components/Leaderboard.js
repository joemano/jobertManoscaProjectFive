import React, { Component } from 'react';

class Leaderboard extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="leaderboard">
        <ul className="bestTimes">

        </ul>
        <button>back</button>
      </div>
    );
  }
}

export default Leaderboard;