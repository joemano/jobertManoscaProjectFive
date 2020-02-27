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
      bestTime: "00:00:00",
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
    if (this.state.totalCentiseconds < this.state.bestTotalCSeconds || !this.state.bestTotalCSeconds) {
      let newBestTime = '';
      this.state.minutes < 10 ? newBestTime += `0${this.state.minutes}:` : newBestTime += `${this.state.minutes}:`
      this.state.seconds < 10 ? newBestTime += `0${this.state.seconds}:` : newBestTime += `${this.state.seconds}:`
      this.state.centiseconds < 10 ? newBestTime += `0${this.state.centiseconds}` : newBestTime += `${this.state.centiseconds}`
      this.setState({
        bestTotalCSeconds: this.state.totalCentiseconds,
        bestTime: newBestTime
      });
    }
  }

  render() {
    return (
      <div className="timer_holder">
        <p className="time_text">Best Record: {this.state.bestTime} Time: {this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}
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