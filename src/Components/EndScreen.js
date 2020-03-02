import React, { Component } from 'react';

class EndScreen extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="endScreen">
        <aside>
          <ul className="topTen">

          </ul>
        </aside>
        <div class="endHeader">
          <h2>All cards matched, commander!</h2>
        </div>
        <div class="reset_box_times">
          <p>Your Time: <span class="timer">00:00:00</span></p>
          <p>Best Time: <span class="best_time">00:00:00</span></p>
        </div>
        <div class="reset_options">
          <button class="cancel">Cancel</button>
          <button class="confirm">Confirm</button>
        </div>
      </div>
    );
  }
}

export default EndScreen;