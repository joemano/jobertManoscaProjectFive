import React, { Component } from 'react';

class Leaderboard extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="leaderboard container">
        <h2>Best Times</h2>
        <ul className="bestTimes">
          {this.props.bestTimes.map((time, i) => {
            return (
              <li key={i}><span>{time.name}</span><span>{time.time}</span></li>
            );
          })}
        </ul>
        <button className="backButton" onClick={this.props.close}>back</button>
      </div>
    );
  }
}

export default Leaderboard;