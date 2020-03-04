import React, { Component } from 'react';

class Instructions extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="instructions">
        <ul className="rules">

        </ul>
        <button>back</button>
      </div>
    );
  }
}

export default Instructions;