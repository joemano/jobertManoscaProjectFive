import React, { Component } from 'react';
import azurLaneLogo from '../assets/images/azurLaneEnglishLogo.png';

class TitleScreen extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="titleScreen">
        <div class="azurLaneLogo">
          <img src={azurLaneLogo} alt="Logo of Azur Lane English servers." />
        </div>
        <h1>Memory Lane</h1>
        <ul>
          <li><button onClick={this.props.game}>start</button></li>
          <li><button>instructions</button></li>
          <li><button>leaderboards</button></li>
          <li><button>credits</button></li>
        </ul>
      </div>
    );
  }
}

export default TitleScreen;