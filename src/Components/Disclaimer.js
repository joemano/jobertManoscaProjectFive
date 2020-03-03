import React, { Component } from 'react';

class Disclaimer extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="disclaimer">
        <div className="disclaimerImage">
          <img src="" alt=""/>
        </div>
        <div className="disclaimerText">
          <p>Greetings, Commander! It is my duty to inform you that Commander Jolo Dawg does not own any of the art used in this mini-game's recreation. All art respectfully belongs to Azur Lane, Yostar, Manjuu, Yongshi and the talented artists that made them. Please support the official release!</p>
          <button className="continue" onClick={this.props.title}>continue</button>
        </div>
      </div>
    );
  }
}

export default Disclaimer;