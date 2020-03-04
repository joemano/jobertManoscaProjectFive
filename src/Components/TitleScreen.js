import React, { Component } from 'react';
import Instructions from './Instructions.js';
import Leaderboard from './Leaderboard.js';
import Credits from './Credits.js';
import azurLaneLogo from '../assets/images/azurLaneEnglishLogo.png';

class TitleScreen extends Component {
  constructor() {
    super();

    this.state = {
      instructions: false,
      leaderboard: false,
      credits: false
    }
  }

  closeInstructions = () => {
    this.setState({instructions: false});
  }

  closeLeaderboard = () => {
    this.setState({Leaderboard: false});
  }

  closeCredits = () => {
    this.setState({credits: false});
  }

  render() {
    return(
      <div className="titleScreen">
        <header>
          <div class="azurLaneLogo">
            <img src={azurLaneLogo} alt="Logo of Azur Lane English servers." />
          </div>
          {/* I chose H1 because it's what my app is called */}
          <h1>Memory Lane</h1>
        </header>
        <ul className="titleOptions">
          <li><button onClick={this.props.game}>start</button></li>
          <li><button onClick={() => {this.setState({instructions: true})}}>instructions</button></li>
          <li><button onClick={() => {this.setState({leaderboard: true})}}>leaderboard</button></li>
          <li><button onClick={() => {this.setState({credits: true})}}>credits</button></li>
        </ul>
      </div>
    );
  }
}

export default TitleScreen;