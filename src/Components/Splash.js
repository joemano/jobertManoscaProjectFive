import React, { Component } from 'react';
import manjuu from '../assets/images/manjuuLogo.png'
import yongshi from '../assets/images/yongshiLogo.png'
import yostar from '../assets/images/yostarLogo.png'

class Splash extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return(
      <div className="splashScreen">
        <div className="developers container" onAnimationEnd={this.props.disclaimer}>
          <div className="dev"><img src={manjuu} alt="Logo of Manjuu, one of the developers." /></div>
          <div className="dev"><img src={yongshi} alt="Logo of Yongshi, one of the developers." /></div>
          <div className="dev"><img src={yostar} alt="Logo of Yostar, the publisher." /></div>
        </div>
      </div>
    );
  }
}

export default Splash;