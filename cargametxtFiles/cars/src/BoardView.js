import React, { Component } from 'react';
import './BoardView.css';
import Square from './Square';
import CarView from './CarView';
import ButtonView from './ButtonView';
import YouWon from './YouWon';

class BoardView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
  }

  handleClick(x, y) {
    const game = this.props.carsGame;
    game.tryMoveFromClick(x, y);
  }

  resetGame() {
    this.props.carsGame.reset();
  }

  nextLevel() {
    this.props.carsGame.nextLevel();
  }

  renderSquares() {
    const squares = [];
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 7; x++) {
        squares.push(
          <Square 
            key={`${x}-${y}`} 
            x={x} 
            y={y} 
            onClick={() => this.handleClick(x, y)}
          />
        );
      }
    }
    return squares;
  }

  renderCars() {
    const game = this.props.carsGame;
    return game.cars.map(car => (
      <CarView 
        key={car.id}
        car={car}
        onClick={(x, y) => this.handleClick(x, y)}
      />
    ));
  }

  render() {
    const game = this.props.carsGame;
    const { counter } = this.props;
    return (
      <div className="board-container">
        <div className="board">
          <div className="grid">
            {this.renderSquares()}
          </div>
          <div className="cars">
            {this.renderCars()}
          </div>
          {}
          <div className="exit-marker" 
               style={{top: `${(3/7) * 100}%`, height: `${(1/7) * 100}%`}} />
          {game.won && <YouWon moves={game.moves} />}
        </div>
        <div className="controls">
          <div className="buttons">
            <ButtonView label="Reset" onClick={this.resetGame} />
            <ButtonView label="Next" onClick={this.nextLevel} />
          </div>
          <div className="game-info">
            <span>Level {game.level}</span>
            <span>Goal {game.goal}</span>
            <span>Moves {game.moves}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardView;