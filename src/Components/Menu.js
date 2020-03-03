import React, { Component } from 'react';

class Menu extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="menu">
        <ul>
          <li><button>back to title</button></li>
          <li><button>instructions</button></li>
          <li><button>leaderboards</button></li>
        </ul>
      </div>
    );
  }
}

export default Menu;