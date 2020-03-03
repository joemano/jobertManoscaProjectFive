import React, { Component } from 'react';
import cardBack from '../assets/images/backCard.png';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row: props.rowIndex,
      column: props.columnIndex,
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

  selectCard = (e) => {
    switch (e.keyCode) {
      case 13: //ENTER
        this.props.cardSelect(this);
        break;
      case 32: //SPACEBAR
        this.props.cardSelect(this);
        break;
      case 37: //LEFT ARROW
        if(this.state.row > 0) {
          document.querySelector(`[data-row="${this.state.row - 1}"][data-column="${this.state.column}"]`).focus();
        }
        break;
      case 38: //UP ARROW
        if(this.state.column > 0) {
          document.querySelector(`[data-row="${this.state.row}"][data-column="${this.state.column - 1}"]`).focus();
        }
        break;
      case 39: //RIGHT ARROW
        if(this.state.row < 5) {
          document.querySelector(`[data-row="${this.state.row + 1}"][data-column="${this.state.column}"]`).focus();
        }
        break;
      case 40: //DOWN ARROW
        if(this.state.column < 2) {
          document.querySelector(`[data-row="${this.state.row}"][data-column="${this.state.column + 1}"]`).focus();
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="gameCardHolder">
        <div tabIndex="0" data-row={this.state.row} data-column={this.state.column} className={this.state.selected ? "gameCard flip" : "gameCard"} 
        onClick={() => {this.props.cardSelect(this)}}
        onKeyDown={this.selectCard}>
          <div className="gameCardBack">
            <img src={cardBack} alt="back of card."/>
          </div>
          <div className="gameCardFace">
            <img src={this.state.face} alt=""/>
          </div>
          {this.state.matched ? <p className="match">Match</p> : null}
        </div>
      </div>
    );
  }
}
export default Card;