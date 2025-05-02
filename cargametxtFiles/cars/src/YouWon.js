import React from 'react';
import './YouWon.css';

function YouWon(props) {
  const { moves } = props;
  
  return (
    <div className="you-won-overlay">
      <div className="you-won-message">
        <h2>Congratulations!</h2>
        <p>You completed the level in {moves} moves!</p>
        <p>Click 'Next' to continue to the next level.</p>
      </div>
    </div>
  );
}

export default YouWon;