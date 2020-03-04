import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import Splash from './Components/Splash.js';
import Disclaimer from './Components/Disclaimer.js'
import TitleScreen from './Components/TitleScreen.js';
import Game from './Components/Game.js';

class App extends Component {
  constructor() {
    super();

    this.dbRef = firebase.database().ref();
    this.bestTimesRef = firebase.database().ref('bestTimes');

    this.state = {
      splash: true,
      disclaimer: false,
      title: false,
      game: false,
      bestTimes: []
    }
  }

  setDisclaimer = () => {
    this.setState({
      splash: false,
      disclaimer: true
    });
  }

  setTitle = () => {
    this.setState({
      disclaimer: false,
      title: true,
      game: false
    });
  }

  setGame = () => {
    this.setState({
      title: false,
      game: true
    });
  }

  convertTimeToNumber = (timeString) => {
    const timeArray = timeString.split(":");
    const timeInCentiseconds = (parseInt(timeArray[0]) * 6000) + (parseInt(timeArray[1]) * 100) + parseInt(timeArray[2]);
    return timeInCentiseconds;
  }

  sortBestTimes = (timeArray) => {
    timeArray.sort((timeA, timeB) => {
      return this.convertTimeToNumber(timeA.time) - this.convertTimeToNumber(timeB.time);
    })
    this.setState({
      bestTimes: timeArray
    });
  }

  componentDidMount() {
    this.bestTimesRef.on('value', (response) => {
      const timeArray = Object.values(response.val());
      this.sortBestTimes(timeArray);
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.splash ? <Splash disclaimer={this.setDisclaimer}/> : null}
        {this.state.disclaimer ? <Disclaimer title={this.setTitle}/> : null}
        {this.state.title ? <TitleScreen game={this.setGame}/> : null}
        {this.state.game ? <Game title={this.setTitle} bestTimesRef={this.bestTimesRef} bestTimes={this.state.bestTimes}/> : null}
      </Fragment>
    );
  }
}

export default App;
