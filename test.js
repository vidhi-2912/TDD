class Spacecraft {
    constructor(x, y, z, dir) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.dir = dir;
    }
  
    executeCommand(command) {
      switch (command) {
        case 'f':
          this.Forward();
          break;
        case 'b':
          this.Backward();
          break;
        case 'r':
          this.turnRight();
          break;
        case 'l':
          this.turnLeft();
          break;
        case 'u':
          this.tiltUp();
          break;
        default:
          throw new Error(`Invalid command: ${command}`);
      }
    }
  
    Forward() {
      switch (this.dir) {
        case 'N':
          this.y++;
          break;
        case 'E':
          this.x++;
          break;
        case 'S':
          this.y--;
          break;
        case 'W':
          this.x--;
          break;
        case 'U':
          this.z++;
          break;
        case 'D':
          this.z--;
          break;
      }
    }
  
    Backward() {
      switch (this.dir) {
        case 'N':
          this.y--;
          break;
        case 'E':
          this.x--;
          break;
        case 'S':
          this.y++;
          break;
        case 'W':
          this.x++;
          break;
        case 'U':
          this.z--;
          break;
        case 'D':
          this.z++;
          break;
      }
    }
  
    turnRight() {
      switch (this.dir) {
        case 'N':
          this.dir = 'E';
          break;
        case 'E':
          this.dir = 'S';
          break;
        case 'S':
          this.dir = 'W';
          break;
        case 'W':
          this.dir = 'N';
          break;
      }
    }
  
    turnLeft() {
      switch (this.dir) {
        case 'N':
          this.dir = 'W';
          break;
        case 'E':
          this.dir = 'N';
          break;
        case 'S':
          this.dir = 'E';
          break;
        case 'W':
          this.dir = 'S';
          break;
      }
    }
  
    tiltUp() {
      switch (this.dir) {
        case 'N':
          this.dir = 'U';
          break;
        case 'S':
          this.dir = 'D';
          break;
      }
    }
  
    getPositionAnddir() {
      return `(${this.x}, ${this.y}, ${this.z}) - ${this.dir}`;
    }
  }
  
  // Test the movements of spacecraft
  const spacecraft = new Spacecraft(0, 0, 0, 'N');
  
  console.log(spacecraft.getPositionAnddir()); // (0, 0, 0) - N
  
  spacecraft.executeCommand('f');
  console.log(spacecraft.getPositionAnddir()); // (0, 1, 0) - N
  
  spacecraft.executeCommand('r');
  console.log(spacecraft.getPositionAnddir()); // (0, 1, 0) - E
  
  spacecraft.executeCommand('u');
  console.log(spacecraft.getPositionAnddir()); // (0, 1, 0) - U
  
  spacecraft.executeCommand('b');
  console.log(spacecraft.getPositionAnddir()); // (0, 1, -1) - U
  
  spacecraft.executeCommand('l');
  console.log(spacecraft.getPositionAnddir()); // (0, 1, -1) - W
  /*
  Output:
(0, 0, 0) - N
(0, 1, 0) - N 
(0, 1, 0) - E 
(0, 1, 0) - E 
(-1, 1, 0) - E
(-1, 1, 0) - N
  */ 
 