import React, { Component, createRef } from 'react';
import Timer from './Timer.js';
import Board from './Board.js';
import Card from './Card.js';
import akagi from '../assets/images/0.png';
import atago from '../assets/images/1.png';
import hammann from '../assets/images/2.png';
import kaga from '../assets/images/3.png';
import pinghai from '../assets/images/4.png';
import eugen from '../assets/images/5.png';
import shoukaku from '../assets/images/6.png';
import unicorn from '../assets/images/7.png';
import yamashiro from '../assets/images/8.png';

class Game extends Component {
  constructor() {
    super();

    this.cardFaces = [
      akagi, atago, hammann, kaga, pinghai, eugen, shoukaku, unicorn, yamashiro
    ];

    this.cardData = [];

    this.timer = createRef();

    // this.flipping = false;
    this.state = {
      firstCard: undefined,
      // secondCard: undefined,

      start: false,
      resetting: false,
      flipping: false,
      showingBoard: false,
      firstFlip: false,
      firstCardSelected: false,
      wrong: false,

      deck: [],
      board: [],
    }
  }

  checkWin = () => {
    const matches = this.cardData.filter((card) => {
      return card.state.matched;
    });

    if (matches.length === 18) {
      return true;
    } else {
      return false;
    }
  }

  boardReset = () => {
    const deck = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 9; j++) {
        deck.push(this.cardFaces[j]);
      }
    }

    let randomNumber;

    this.cardData.forEach((card) => {
      randomNumber = Math.floor(Math.random() * deck.length);
      card.setState({ face: deck[randomNumber] });
      deck.splice(randomNumber, 1);
    })
  }

  reset = () => {
    // $(".reset_box").toggleClass("reset_hidden");
    this.setState({resetting: true});

    this.cardData.forEach((card) => {
      card.setState({ selected: false, matched: false });
    })

    // wait until cards are done flipping
    setTimeout(() => {
      this.boardReset();

      this.timer.current.resetTimer();

      // reset game states
      this.setState({
        start: false,
        resetting: false,
        firstFlip: false
      });
    }, 500);
  }

  checkMatch = (card) => {

    if (!card.state.selected && !card.state.matched && !this.state.wrong && !this.state.showingBoard && !this.state.resetting && this.state.start) {

      // console.log("selected : ", card.state.selected);
      // console.log("wrong : ", this.state.wrong);
      // console.log("start : ", this.state.start);
      // console.log("showing : ", this.state.showingBoard);
      // console.log("flipping : ", this.state.flipping);
      // console.log("first flip : ", this.state.firstFlip);
      // console.log("first card pick : ", this.state.firstCardSelected);
      // console.log("-------------------------------------");


      //lock flipping function while a card is flipping so they don't flip the whole board at once.
      if (!this.state.flipping) {
        this.setState({ flipping: true });
        // this.flipping = true;
        card.setState({ selected: true });
        //only start the timer if this is the first flip of the game.
        if (!this.state.firstFlip) {
          this.setState({ firstFlip: true });
          this.timer.current.startTimer();
        }
        // This massive if chain is for checking whether or not the cards you selected match.
        // check if first card is selected and point the first card to the selected card.
        if (!this.state.firstCard) {
          this.setState({ firstCard: card });
        } else {
          console.log(this.state.firstCard, card);
          // compare the first and second cards for a match and checks for a win
          if (this.state.firstCard.state.face === card.state.face) {
            console.log('match');
            this.state.firstCard.setState({ matched: true }, () => { this.setState({ firstCard: undefined }) });
            card.setState({ matched: true }, () => {
              if (this.checkWin()) {
                this.timer.current.stopTimer();
              }
            });
          } else {
            console.log('NOPE');
            // punish a wrong guess and flip the 2 selected cards back down
            this.setState({ wrong: true });
            setTimeout(() => {
              this.state.firstCard.setState({ selected: false }, () => { this.setState({ firstCard: undefined }) });
              card.setState({ selected: false });
            }, 600);
            setTimeout(() => { this.setState({ wrong: false }) }, 1100);
          }
        }

        // wait until the card is done flipping.
        setTimeout(() => {
          this.setState({ flipping: false });

          if (card.state.matched) {
            if (this.checkWin()) {
              alert(`YOU WON`);
              // $(".reset_box").toggleClass("reset_hidden");
              this.reset();
            }
          }
        }, 500);
      }
    }
  }

  cardSelection = (card) => {
    if (!this.state.start) {
      console.log("game has started");
      this.setState({ start: true });
      this.showGameBoard();
    } else {
      this.checkMatch(card);
    }
  }

  showGameBoard = () => {
    console.log(this.cardData);
    this.setState({ showingBoard: true });
    this.cardData.forEach((card) => {
      card.setState({ selected: true });
    })
    setTimeout(() => {
      this.cardData.forEach((card) => {
        card.setState({ selected: false });
      })
    }, 3000);
    setTimeout(() => {
      this.setState({ showingBoard: false });
    }, 3500);
  }

  getCardData = (card) => {
    this.cardData.push(card);
  }

  buildDeck = () => {
    const deck = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 9; j++) {
        deck.push(this.cardFaces[j]);
      }
    }
    this.setState({ deck: deck }, this.setUpBoard);
  }

  setUpBoard = () => {
    const board = [[], [], []];
    let randomNumber;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        randomNumber = Math.floor(Math.random() * this.state.deck.length);
        board[i].push(
          <Card key={`x${j}y${i}`} selected={false} matched={false} face={this.state.deck[randomNumber]} cardSelect={this.cardSelection} getData={this.getCardData} />
        );
        this.state.deck.splice(randomNumber, 1);
      }
    }
    this.setState({
      board: board
    })
  }

  componentDidMount() {
    this.buildDeck();
  }

  render() {
    return (
      <div className="frame">
        <Timer ref={this.timer} />
        <Board board={this.state.board} />
      </div>
    );
  }
}

export default Game;