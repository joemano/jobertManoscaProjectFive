import React, { Component } from 'react';
import Instructions from './Instructions.js';
import Leaderboard from './Leaderboard.js';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      instructions: false,
      leaderboard: false
    }
  }

  closeInstructions = () => {
    this.setState({instructions: false});
  }

  closeLeaderboard = () => {
    this.setState({leaderboard: false});
  }

  render() {
    return(
      <div className="menu container">
        {!this.state.instructions && !this.state.leaderboard ? 
        <ul className="menuList">
          <li><button className="menuButton" onClick={this.props.title}>back to title</button></li>
          <li><button className="menuButton" onClick={() => {this.setState({instructions: true})}}>instructions</button></li>
          <li><button className="menuButton" onClick={() => {this.setState({leaderboard: true})}}>leaderboard</button></li>
          <li><button className="backButton" onClick={this.props.unpause}>close</button></li>
        </ul>
        : null}
        {this.state.instructions ? <Instructions close={this.closeInstructions}/> : null}
        {this.state.leaderboard ? <Leaderboard bestTimes={this.props.bestTimes} close={this.closeLeaderboard}/> : null}
      </div>
    );
  }
}

export default Menu;