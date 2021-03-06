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
import EndScreen from './EndScreen.js';
import Menu from './Menu.js';

class Game extends Component {
  constructor() {
    super();

    // These things don't change so I found no need to put them in state
    this.cardFaces = [
      akagi, atago, hammann, kaga, pinghai, eugen, shoukaku, unicorn, yamashiro
    ];

    this.cardData = [];

    this.timer = createRef();

    // this.flipping = false;
    this.state = {
      firstCard: undefined,
      
      name: '',

      start: false,
      resetting: false,
      flipping: false,
      showingBoard: false,
      firstFlip: false,
      firstCardSelected: false,
      wrong: false,
      pause: false,
      end: false,
      nameRecorded: false,

      deck: [],
      board: [],
    }
  }

  // loop through the list of cards and check if the number of matches is the same as the number of cards
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

  // reassign face types to each of the cards on reset
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

  // Reset the game
  reset = () => {
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
        firstFlip: false,
        end: false,
        nameRecorded: false
      });
    }, 500);
  }

  // logic for checking if a card is matched.
  checkMatch = (card) => {
    if (!card.state.selected && !card.state.matched && !this.state.wrong && !this.state.showingBoard && !this.state.resetting && this.state.start) {

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
          // compare the first and second cards for a match and checks for a win
          if (this.state.firstCard.state.face === card.state.face) {
            this.state.firstCard.setState({ matched: true }, () => { this.setState({ firstCard: undefined }) });
            card.setState({ matched: true }, () => {
              if (this.checkWin()) {
                // Stop the timer when they click the last match
                this.timer.current.stopTimer();
              }
            });
          } else {
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
            // Wait until the last card is flipped before ending the game
            if (this.checkWin()) {
              this.setState({
                end: true
              });
            }
          }
        }, 500);
      }
    }
  }

  // Signal that a card is being selected. Change start state to true if the game hasn't started yet
  cardSelection = (card) => {
    if (!this.state.start) {
      this.setState({ start: true });
      this.showGameBoard();
    } else {
      this.checkMatch(card);
    }
  }

  // Reveals all cards to the user before flipping them back down
  showGameBoard = () => {
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

  // stores a reference to the card into an array
  getCardData = (card) => {
    this.cardData.push(card);
  }

  // Takes a received string and pushes it into the database along with the best time
  recordTime = (inputName) => {
    this.setState({ 
      name: inputName, 
      nameRecorded: true
    }, () => {
      const bestTimeData = {
        name: this.state.name,
        time: this.timer.current.getBestTime()
      };
      this.props.bestTimesRef.push(bestTimeData);
    });
  }

  // Builds a deck of all possible card faces and only allow 2 instances of each
  buildDeck = () => {
    const deck = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 9; j++) {
        deck.push(this.cardFaces[j]);
      }
    }
    this.setState({ deck: deck }, this.setUpBoard);
  }

  // builds the grid to store into a state before passing to the board component for display
  setUpBoard = () => {
    const board = [[], [], []];
    let randomNumber;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        randomNumber = Math.floor(Math.random() * this.state.deck.length);
        board[i].push(
          <Card key={`x${j}y${i}`} rowIndex={j} columnIndex={i} selected={false} matched={false} face={this.state.deck[randomNumber]} cardSelect={this.cardSelection} getData={this.getCardData} />
        );
        this.state.deck.splice(randomNumber, 1);
      }
    }
    this.setState({
      board: board
    })
  }

  unpause = () => {
    this.setState({pause: false});
  }

  componentDidMount() {
    this.buildDeck();
  }

  render() {
    return (
      <div className="game container">
        <div className="frame">
          <Timer ref={this.timer} paused={this.state.pause}/>
          <Board board={this.state.board} />
        </div>
        <button className="pause" onClick={() => {this.setState({pause: true})}}><i className="fas fa-bars"></i></button>
        {this.state.pause ? <Menu bestTimes={this.props.bestTimes} title={this.props.title} unpause={this.unpause}/> : null}
        {/* Display End screen only if the end state is true. Also pass it the info it needs for display */}
        {this.state.end ? <EndScreen 
          bestArray={this.props.bestTimes}
          currentTime={this.timer.current.getCurrentTime()}
          bestTime={this.timer.current.getBestTime()}
          reset={this.reset} record={this.recordTime}
          nameSaved={this.state.nameRecorded}
          title={this.props.title}/>
          : null}
      </div>
    );
  }
}

export default Game;