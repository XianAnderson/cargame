// This file contains the game logic for the Cars game
// The game involves moving cars on a board to allow the red car to exit

class Game {
  constructor(level) {
    this.board = Array(7).fill().map(() => Array(7).fill(null));
    this.cars = [];
    this.moves = 0;
    this.level = level || 1;
    this.goal = 20;
    this.won = false;
    this.setupLevel(this.level);
  }

  setupLevel(level) {
    this.cars = [];
    this.board = Array(7).fill().map(() => Array(7).fill(null));
    this.moves = 0;
    this.won = false;
    
    if (level === 1) {
      this.addCar({
        id: 'red',
        x: 2,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 6,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'yellow',
        x: 3,
        y: 4,
        length: 3,
        horizontal: false,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'magenta',
        x: 5,
        y: 5,
        length: 2,
        horizontal: true,
        color: 'magenta'
      });
      
      this.addCar({
        id: 'blue',
        x: 5,
        y: 6,
        length: 2,
        horizontal: true,
        color: 'blue'
      });
    } 
    else if (level === 2) {
      this.addCar({
        id: 'red',
        x: 1,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 0,
        y: 3,
        length: 1,
        horizontal: true,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 3,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'purple',
        x: 4,
        y: 3,
        length: 2,
        horizontal: false,
        color: 'purple'
      });
      
      this.addCar({
        id: 'orange',
        x: 4,
        y: 5,
        length: 2,
        horizontal: true,
        color: 'orange'
      });
    }
    else if (level === 3) {
      this.addCar({
        id: 'red',
        x: 0,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 2,
        y: 2,
        length: 2,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 3,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 2,
        y: 4,
        length: 3,
        horizontal: true,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'purple',
        x: 4,
        y: 1,
        length: 2,
        horizontal: true,
        color: 'purple'
      });
      
      this.addCar({
        id: 'cyan',
        x: 5,
        y: 4,
        length: 3,
        horizontal: false,
        color: 'cyan'
      });
    }
    else if (level === 4) {
      this.addCar({
        id: 'red',
        x: 1,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 0,
        length: 2,
        horizontal: true,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 0,
        y: 1,
        length: 3,
        horizontal: false,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 3,
        y: 0,
        length: 2,
        horizontal: true,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'orange',
        x: 5,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'orange'
      });
      
      this.addCar({
        id: 'purple',
        x: 3,
        y: 1,
        length: 3,
        horizontal: true,
        color: 'purple'
      });
      
      this.addCar({
        id: 'cyan',
        x: 3,
        y: 2,
        length: 2,
        horizontal: false,
        color: 'cyan'
      });
      
      this.addCar({
        id: 'magenta',
        x: 4,
        y: 4,
        length: 3,
        horizontal: true,
        color: 'magenta'
      });
    }
    else if (level === 5) {
      this.addCar({
        id: 'red',
        x: 2,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 2,
        length: 3,
        horizontal: true,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 0,
        y: 3,
        length: 2,
        horizontal: false,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 0,
        y: 5,
        length: 3,
        horizontal: true,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'purple',
        x: 4,
        y: 1,
        length: 3,
        horizontal: false,
        color: 'purple'
      });
      
      this.addCar({
        id: 'cyan',
        x: 5,
        y: 1,
        length: 2,
        horizontal: true,
        color: 'cyan'
      });
      
      this.addCar({
        id: 'magenta',
        x: 5,
        y: 4,
        length: 3,
        horizontal: false,
        color: 'magenta'
      });
    }
    else if (level === 6) {
      this.addCar({
        id: 'red',
        x: 0,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 2,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 3,
        y: 0,
        length: 2,
        horizontal: true,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 3,
        y: 1,
        length: 3,
        horizontal: false,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'orange',
        x: 4,
        y: 2,
        length: 2,
        horizontal: true,
        color: 'orange'
      });
      
      this.addCar({
        id: 'purple',
        x: 2,
        y: 4,
        length: 3,
        horizontal: true,
        color: 'purple'
      });
      
      this.addCar({
        id: 'cyan',
        x: 5,
        y: 4,
        length: 3,
        horizontal: false,
        color: 'cyan'
      });
    }
    else if (level === 7) {
      this.addCar({
        id: 'red',
        x: 1,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 0,
        length: 2,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 0,
        y: 2,
        length: 2,
        horizontal: true,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 0,
        y: 5,
        length: 2,
        horizontal: true,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'purple',
        x: 3,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'purple'
      });
      
      this.addCar({
        id: 'orange',
        x: 4,
        y: 0,
        length: 2,
        horizontal: true,
        color: 'orange'
      });
      
      this.addCar({
        id: 'magenta',
        x: 4,
        y: 3,
        length: 2,
        horizontal: false,
        color: 'magenta'
      });
      
      this.addCar({
        id: 'gray',
        x: 5,
        y: 3,
        length: 3,
        horizontal: false,
        color: 'gray'
      });
      
      this.addCar({
        id: 'pink',
        x: 2,
        y: 5,
        length: 3,
        horizontal: true,
        color: 'pink'
      });
    }
    else if (level === 8) {
      this.addCar({
        id: 'red',
        x: 2,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 1,
        y: 0,
        length: 3,
        horizontal: true,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 4,
        y: 0,
        length: 2,
        horizontal: false,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'orange',
        x: 5,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'orange'
      });
      
      this.addCar({
        id: 'purple',
        x: 1,
        y: 1,
        length: 3,
        horizontal: false,
        color: 'purple'
      });
      
      this.addCar({
        id: 'cyan',
        x: 2,
        y: 1,
        length: 2,
        horizontal: false,
        color: 'cyan'
      });
      
      this.addCar({
        id: 'magenta',
        x: 4,
        y: 2,
        length: 2,
        horizontal: true,
        color: 'magenta'
      });
      
      this.addCar({
        id: 'gray',
        x: 0,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'gray'
      });
      
      this.addCar({
        id: 'pink',
        x: 4,
        y: 3,
        length: 3,
        horizontal: false,
        color: 'pink'
      });
    }
    else if (level === 9) {
      this.addCar({
        id: 'red',
        x: 1,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 0,
        length: 2,
        horizontal: true,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 2,
        y: 0,
        length: 2,
        horizontal: false,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 3,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'purple',
        x: 4,
        y: 0,
        length: 2,
        horizontal: true,
        color: 'purple'
      });
      
      this.addCar({
        id: 'orange',
        x: 4,
        y: 1,
        length: 2,
        horizontal: false,
        color: 'orange'
      });
      
      this.addCar({
        id: 'magenta',
        x: 0,
        y: 2,
        length: 2,
        horizontal: true,
        color: 'magenta'
      });
      
      this.addCar({
        id: 'cyan',
        x: 5,
        y: 3,
        length: 2,
        horizontal: false,
        color: 'cyan'
      });
      
      this.addCar({
        id: 'gray',
        x: 3,
        y: 4,
        length: 2,
        horizontal: true,
        color: 'gray'
      });
      
      this.addCar({
        id: 'pink',
        x: 0,
        y: 5,
        length: 3,
        horizontal: true,
        color: 'pink'
      });
    }
    else if (level === 10) {
      this.addCar({
        id: 'red',
        x: 2,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 1,
        y: 0,
        length: 2,
        horizontal: true,
        color: 'blue'
      });
      
      this.addCar({
        id: 'yellow',
        x: 1,
        y: 1,
        length: 3,
        horizontal: false,
        color: 'yellow'
      });
      
      this.addCar({
        id: 'purple',
        x: 2,
        y: 1,
        length: 2,
        horizontal: true,
        color: 'purple'
      });
      
      this.addCar({
        id: 'orange',
        x: 4,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'orange'
      });
      
      this.addCar({
        id: 'magenta',
        x: 5,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'magenta'
      });
      
      this.addCar({
        id: 'cyan',
        x: 4,
        y: 3,
        length: 2,
        horizontal: false,
        color: 'cyan'
      });
      
      this.addCar({
        id: 'gray',
        x: 0,
        y: 4,
        length: 3,
        horizontal: true,
        color: 'gray'
      });
      
      this.addCar({
        id: 'pink',
        x: 3,
        y: 4,
        length: 3,
        horizontal: false,
        color: 'pink'
      });
    }
    
    else {
      this.addCar({
        id: 'red',
        x: 2,
        y: 3,
        length: 2,
        horizontal: true,
        color: 'red'
      });
      
      this.addCar({
        id: 'green',
        x: 0,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'green'
      });
      
      this.addCar({
        id: 'blue',
        x: 4,
        y: 0,
        length: 3,
        horizontal: false,
        color: 'blue'
      });
    }
  }

  addCar(car) {
    this.cars.push(car);
    
    // Place car on the board
    if (car.horizontal) {
      for (let i = 0; i < car.length; i++) {
        this.board[car.y][car.x + i] = car.id;
      }
    } else {
      for (let i = 0; i < car.length; i++) {
        this.board[car.y + i][car.x] = car.id;
      }
    }
  }

  // Check if a move is valid for a car
  isValidMove(carId, dx, dy) {
    const car = this.getCar(carId);
    
    if (!car) return false;
    
    // Horizontal cars can only move horizontally
    if (car.horizontal && dy !== 0) return false;
    
    // Vertical cars can only move vertically
    if (!car.horizontal && dx !== 0) return false;
    
    // Check boundaries and obstacles
    let newX, newY;
    
    if (car.horizontal) {
      if (carId === 'red' && dx > 0) {
        newX = car.x + car.length;
        for (let i = 0; i < dx; i++) {
          // If at the edge or beyond, it's valid for the red car
          if (newX + i >= 7) {
            if (carId === 'red' && car.y === 3) {
              return true;
            }
            return false;
          }
          // Otherwise check if the space is occupied
          if (this.board[car.y][newX + i] !== null) {
            return false;
          }
        }
      }
      // Check forward movement (right)
      else if (dx > 0) {
        newX = car.x + car.length;
        for (let i = 0; i < dx; i++) {
          if (newX + i >= 7 || this.board[car.y][newX + i] !== null) {
            return false;
          }
        }
      }
      // Check backward movement (left)
      else if (dx < 0) {
        newX = car.x + dx;
        for (let i = 0; i < Math.abs(dx); i++) {
          if (newX + i < 0 || this.board[car.y][newX + i] !== null) {
            return false;
          }
        }
      }
    } else {
      // Check downward movement
      if (dy > 0) {
        newY = car.y + car.length;
        for (let i = 0; i < dy; i++) {
          if (newY + i >= 7 || this.board[newY + i][car.x] !== null) {
            return false;
          }
        }
      }
      // Check upward movement
      else if (dy < 0) {
        newY = car.y + dy;
        for (let i = 0; i < Math.abs(dy); i++) {
          if (newY + i < 0 || this.board[newY + i][car.x] !== null) {
            return false;
          }
        }
      }
    }
    
    return true;
  }

  // Move a car on the board
  moveCar(carId, dx, dy) {
    if (!this.isValidMove(carId, dx, dy)) return false;
    
    const car = this.getCar(carId);
    
    // Remove car from current position on the board
    if (car.horizontal) {
      for (let i = 0; i < car.length; i++) {
        if (car.x + i < 7) { // Make sure we're not out of bounds
          this.board[car.y][car.x + i] = null;
        }
      }
    } else {
      for (let i = 0; i < car.length; i++) {
        this.board[car.y + i][car.x] = null;
      }
    }
    
    // Update car position
    car.x += dx;
    car.y += dy;
    
    // Place car at new position on the board (if still on board)
    if (car.horizontal) {
      for (let i = 0; i < car.length; i++) {
        if (car.x + i < 7) { // Make sure we're not out of bounds
          this.board[car.y][car.x + i] = car.id;
        }
      }
    } else {
      for (let i = 0; i < car.length; i++) {
        this.board[car.y + i][car.x] = car.id;
      }
    }
    
    this.moves++;
    
    // Check if the red car can exit (if it's at the right edge)
    if (carId === 'red' && car.x + car.length > 6 && car.y === 3) {
      this.won = true;
    }
    
    return true;
  }

  // Get a car by its ID
  getCar(carId) {
    return this.cars.find(car => car.id === carId);
  }

  // Reset the current level
  reset() {
    this.setupLevel(this.level);
  }

  // Move to the next level
  nextLevel() {
    if (this.level < this.goal) {
      this.level++;
      this.setupLevel(this.level);
      return true;
    }
    return false;
  }

  // Check if clicking on a position will select a car
  getCarAtPosition(x, y) {
    if (x < 0 || x >= 7 || y < 0 || y >= 7) return null;
    const carId = this.board[y][x];
    return carId ? this.getCar(carId) : null;
  }

  // Determine which end of the car was clicked
  getCarClickEnd(car, x, y) {
    if (car.horizontal) {
      if (x === car.x) return 'start';
      if (x === car.x + car.length - 1) return 'end';
    } else {
      if (y === car.y) return 'start';
      if (y === car.y + car.length - 1) return 'end';
    }
    return null;
  }

  // Try to move a car based on clicking one of its ends
  tryMoveFromClick(x, y) {
    const car = this.getCarAtPosition(x, y);
    if (!car) return false;
    
    const end = this.getCarClickEnd(car, x, y);
    if (!end) return false;
    
    let dx = 0, dy = 0;
    
    if (car.horizontal) {
      dx = end === 'start' ? -1 : 1;
    } else {
      dy = end === 'start' ? -1 : 1;
    }
    
    return this.moveCar(car.id, dx, dy);
  }

  registerCallback(callback) {
    this.onBoardUpdate = callback;
  }
}

export default Game;