import React, { Component } from 'react';
import './App.css';
import BoardView from './BoardView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0
    };
    this.onBoardUpdate = this.onBoardUpdate.bind(this);
    this.props.carsGame.registerCallback(this.onBoardUpdate);
  }

  onBoardUpdate(counter) {
    this.setState({ counter: counter });
  }

  render() {
    return (
      <div className="game-container">
        <h1>Cars Rush Hour Game</h1>
        <BoardView 
          carsGame={this.props.carsGame} 
          counter={this.state.counter} 
        />
      </div>
    );
  }
}

export default App;