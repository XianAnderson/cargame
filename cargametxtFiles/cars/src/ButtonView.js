import React from 'react';
import './ButtonView.css';

function ButtonView(props) {
  const { label, onClick } = props;
  
  return (
    <button 
      className="game-button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonView;