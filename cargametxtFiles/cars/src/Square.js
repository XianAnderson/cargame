import React from 'react';
import './Square.css';

function Square(props) {
  const { x, y, onClick } = props;
  
  return (
    <div 
      className="square"
      style={{
        gridColumn: x + 1,
        gridRow: y + 1,
      }}
      onClick={() => onClick(x, y)}
    />
  );
}

export default Square;