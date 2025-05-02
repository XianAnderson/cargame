import React from 'react';
import './CarView.css';

function CarView(props) {
  const { car, onClick } = props;
  const { id, x, y, length, horizontal, color } = car;
  
  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    if (horizontal) {
      const width = rect.width;
      const clickPos = clickX / width;
      if (clickPos < 0.3) {
        onClick(x, y);
      } else if (clickPos > 0.7) {
        onClick(x + length - 1, y); 
      }
    } else {
      const height = rect.height;
      const clickPos = clickY / height;
      if (clickPos < 0.3) {
        onClick(x, y); 
      } else if (clickPos > 0.7) {
        onClick(x, y + length - 1); 
      }
    }
  };
  
  return (
    <div 
      className={`car ${horizontal ? 'horizontal' : 'vertical'} ${id}`}
      style={{
        gridColumn: `${x + 1} / span ${horizontal ? length : 1}`,
        gridRow: `${y + 1} / span ${horizontal ? 1 : length}`,
        backgroundColor: color,
      }}
      onClick={handleClick}
    />
  );
}

export default CarView;