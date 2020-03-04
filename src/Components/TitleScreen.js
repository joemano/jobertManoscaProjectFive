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
    this.setState({leaderboard: false});
  }

  closeCredits = () => {
    this.setState({credits: false});
  }

  render() {
    return(
      <div className="titleScreen">
        <header>
          <div className="azurLaneLogo">
            <img src={azurLaneLogo} alt="Logo of Azur Lane English servers." />
          </div>
          {/* I chose H1 because it's what my app is called */}
          <h1>Memory Lane</h1>
        </header>
        {!this.state.instructions && !this.state.leaderboard && !this.state.credits ? 
          <ul className="titleOptions">
            <li><button onClick={this.props.game}>start</button></li>
            <li><button onClick={() => {this.setState({instructions: true})}}>instructions</button></li>
            <li><button onClick={() => {this.setState({leaderboard: true})}}>leaderboard</button></li>
            <li><button onClick={() => {this.setState({credits: true})}}>credits</button></li>
          </ul>
        : null}
        {this.state.instructions ? <Instructions close={this.closeInstructions}/> : null}
        {this.state.leaderboard ? <Leaderboard bestTimes={this.props.bestTimes} close={this.closeLeaderboard}/> : null}
        {this.state.credits ? <Credits close={this.closeCredits}/> : null}
      </div>
    );
  }
}

export default TitleScreen;