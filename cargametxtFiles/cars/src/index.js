import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Game from './carsGame';

// Initialize the game
const carsGame = new Game(1);

// Register callback function to update the App state
carsGame.registerCallback = function(callback) {
  this.onBoardUpdate = callback;
};

// Modify moveCar method to trigger updates
const originalMoveCar = carsGame.moveCar;
carsGame.moveCar = function(carId, dx, dy) {
  const result = originalMoveCar.call(this, carId, dx, dy);
  if (result && this.onBoardUpdate) {
    this.onBoardUpdate(this.moves);
  }
  return result;
};

// Modify reset method to trigger updates
const originalReset = carsGame.reset;
carsGame.reset = function() {
  originalReset.call(this);
  if (this.onBoardUpdate) {
    this.onBoardUpdate(this.moves);
  }
};

// Modify nextLevel method to trigger updates
const originalNextLevel = carsGame.nextLevel;
carsGame.nextLevel = function() {
  const result = originalNextLevel.call(this);
  if (this.onBoardUpdate) {
    this.onBoardUpdate(this.moves);
  }
  return result;
};

// Create a root using createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App carsGame={carsGame} />
  </React.StrictMode>
);