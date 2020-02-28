import React, { Component } from 'react';
import cardBack from '../assets/images/backCard.png';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: props.column,
      row: props.row,
      face: props.face,
      selected: props.selected,
      matched: props.matched,
    };
  }

  componentDidUpdate() {
    // console.log(this.state.selected, this.state.matched);
  }

  componentDidMount() {
    this.props.getData(this);
  }

  render() {
    return (
      <div className="gameCardHolder">
        <div className={this.state.selected ? "gameCard flip" : "gameCard"} onClick={() => {this.props.cardSelect(this)}}>
          <div className="gameCardBack">
            <img src={cardBack} alt="back of card."/>
          </div>
          <div className="gameCardFace">
            <img src={this.props.face} alt=""/>
          </div>
          {this.state.matched ? <p className="match">Match</p> : null}
        </div>
      </div>
    );
  }
}
export default Card;