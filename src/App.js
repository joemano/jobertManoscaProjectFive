import React, { Component, Fragment } from 'react';
import Splash from './Components/Splash.js';
import Disclaimer from './Components/Disclaimer.js'
import TitleScreen from './Components/TitleScreen.js';
import Game from './Components/Game.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      splash: true,
      disclaimer: false,
      title: false,
      game: false
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

  render() {
    return (
      <Fragment>
        {this.state.splash ? <Splash disclaimer={this.setDisclaimer}/> : null}
        {this.state.disclaimer ? <Disclaimer title={this.setTitle}/> : null}
        {this.state.title ? <TitleScreen game={this.setGame}/> : null}
        {this.state.game ? <Game title={this.setTitle}/> : null}
      </Fragment>
    );
  }
}

export default App;
