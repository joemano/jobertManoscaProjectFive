import React, { Component } from 'react';
import firebase from 'firebase';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      clock: undefined,
      minutes: 0,
      seconds: 0,
      centiseconds: 0,
      totalCentiseconds: 0,
      bestTotalCSeconds: undefined,
      bestTime: '00:00:00',
      currentTime: '00:00:00'
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
    if(!this.props.paused) {
      this.setState({
        centiseconds: this.state.centiseconds + 1,
        totalCentiseconds: this.state.totalCentiseconds + 1
      });
    }
  }

  startTimer = () => {
    // console.log('hi');
    this.setState({clock: setInterval(this.tick, 10)});
  }

  stopTimer = () => {
    clearInterval(this.state.clock);
    let currentTime = '';
    this.state.minutes < 10 ? currentTime += `0${this.state.minutes}:` : currentTime += `${this.state.minutes}:`
    this.state.seconds < 10 ? currentTime += `0${this.state.seconds}:` : currentTime += `${this.state.seconds}:`
    this.state.centiseconds < 10 ? currentTime += `0${this.state.centiseconds}` : currentTime += `${this.state.centiseconds}`

    this.setState({
      currentTime: currentTime
    });

    if (this.state.totalCentiseconds < this.state.bestTotalCSeconds || !this.state.bestTotalCSeconds) {
      this.setState({
        bestTotalCSeconds: this.state.totalCentiseconds,
        bestTime: currentTime
      });
    }
  }

  getBestTime = () => {
    return this.state.bestTime;
  }

  getCurrentTime = () => {
    return this.state.currentTime;
  }

  resetTimer = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
      centiseconds: 0,
      totalCentiseconds: 0
    });
  }

  render() {
    return (
      <div className="timerHolder">
        <p className="timeText">Best Record: {this.state.bestTime} Time: {this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}
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