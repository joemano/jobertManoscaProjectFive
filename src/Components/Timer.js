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

  componentDidUpdate() {
    if (this.state.centiseconds / 100 === 1) {
      this.setState({
        centiseconds: 0,
        seconds: this.state.seconds + 1
      });
    }

    if (this.state.seconds / 60 === 1) {
      this.state.seconds = 0;
      this.state.minutes++;
      this.setState({
        seconds: 0,
        minutes: this.state.minutes + 1
      });
    }
  }
  // Timer maths n logic goes here
  tick = () => {
    this.setState({
      centiseconds: this.state.centiseconds + 1,
      totalCentiseconds: this.state.totalCentiseconds + 1
    });
  }

  startTimer = () => {
    // console.log('hi');
    this.setState({clock: setInterval(this.tick, 10)});
  }

  stopTimer = () => {
    clearInterval(this.state.clock);
  }

  render() {
    return (
      <div className="timer_holder">
        <p className="time_text">Best Record: 00:00:00 Time: {this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}
        :
        {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
        :
        {this.state.centiseconds < 10 ? `0${this.state.centiseconds}` : this.state.centiseconds}
        </p>
      </div>
    );
  }
}

export default Timer;