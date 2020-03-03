import React, { Component } from 'react';

class EndScreen extends Component {
  constructor() {
    super();

    this.state = {
      name: ''
    }
  }

  setName = (e) => {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="endScreen container">
        <aside>
          <h3>Best Times</h3>
          <ul className="bestTimes">
            {this.props.bestArray.map((time, i) => {
              return(
                <li key={i}><span>{time.name}</span><span>{time.time}</span></li>
              );
            })}
          </ul>
        </aside>
        <div className="endContent">
          <div className="endHeader">
            <h2>All cards matched, commander!</h2>
            <h3>Want to play again?</h3>
          </div>
          <div className="endText">
            <div className="times">
              <p>Your Time: {this.props.currentTime}</p>
              <p>Best Time: {this.props.bestTime}</p>
            </div>
            <div className="endInput">
              <p>Enter your name and hit save to record your score!</p>
              <label htmlFor="name" className="sr-only">Enter Your Name</label>
              <input id="name" type="text" placeholder="Enter Your Name" onChange={this.setName}/>
            </div>
          </div>
          <div className="resetOptions">
            <button className="cancel">Cancel</button>
            {this.props.nameSaved ? null : <button onClick={() => {this.props.record(this.state.name)}} className="save">save</button>}
            <button onClick={this.props.reset} className="confirm">Confirm</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EndScreen;