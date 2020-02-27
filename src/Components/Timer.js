import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      clock: undefined,
      minutes: 0,
      displayedMinutes: 0,
      seconds: 0,
      displayedSeconds: 0,
      centiseconds: 0,
      displayedCentiseconds: 0,
      totalCentiseconds: 0,
      bestTotalCSeconds: undefined,
      bestTime: "",
    }
  }

  render() {
    return(
      <div className="timer_holder">
        <p className="time_text">Best Record: <span className="best_time">00:00:00</span> Time: <span className="timer">00:00:00</span></p>
      </div>
    );
  }
}

export default Timer;