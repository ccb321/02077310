//GAME PARAMETERS
const heightOfBoard = 550; //pixels
const FPS = 30; //frames per second
const sizeOfGrid = 6; // number of rows and collumns, make larger to get more dots

// derived dimensions
const widthOfBoard = heightOfBoard *0.9;
const cellSize = widthOfBoard / (sizeOfGrid + 2); // size of cell (and margins) is the width of the board divided by how many cells are wanted +2 margin
const strokeSize = cellSize /12; //stroke width 
const dotRad = strokeSize // diameter of dot is double of connecting strokes
const topMargin = heightOfBoard - (sizeOfGrid +1) *cellSize; //top margin for scores and names

//colours
const boardColour = "silver";
const colourBoarder = "gray";
const colourDot = "gray";
const colourComp = "crimson";
const colourCompHover = "lightpink";
const colourPlayer = "royalblue";
const colourPlayerHover = "lightsteelblue";


//set up game canvas

let canvas = document.createElement("canvas");
canvas.height = heightOfBoard;
canvas.width = widthOfBoard;
document.body.appendChild(canvas);
let canvRect = canvas.getBoundingClientRect();

//Definitions

const Side = {
  BOT: 0,
  LEFT: 1,
  RIGHT: 2,
  TOP: 3 //sets numbers up for switch to figure out what side of the square it is
};

//setting up context

let context = canvas.getContext("2d");
context.lineWidth = strokeSize;

//game variables
let playersTurn, squares;

//start a new game
newGame();

//Event handlers
canvas.addEventListener("mousemove", hightlightGrid); //mousemovement is based on screen coordinates not canvas


//set up game loop

setInterval(loop, 1000 / FPS);

function loop() {
  drawBoard();//decides order in which stuff is drawn on
  drawSquares();
  drawGrid();
}

function drawBoard() {
  context.fillStyle = boardColour;
  context.strokeStyle = colourBoarder;
  context.fillRect(0,0, widthOfBoard, heightOfBoard); // draws board in green
  context.strokeRect (strokeSize / 2, strokeSize / 2, widthOfBoard - strokeSize, heightOfBoard - strokeSize); // draws boarder 
}

function drawDot(x,y) {
  context.fillStyle = colourDot;
  context.beginPath();
  context.arc(x,y, dotRad, 0, Math.PI * 2);
  context.fill();
}

function drawLine(x0, y0, x1, y1, colour) {
  context.strokeStyle = colour;
  context.beginPath();
  context.moveTo(x0,y0);
  context.lineTo(x1,y1);
  context.stroke();
}


function drawSquares() {
  for (let row of squares) { //iterate over every row of the squares
    for (let square of row) { // iterate over every square of each row
      square.drawSides();
      square.drawFill();
    }
  }
}


function getColour(player, light) {
  if (player) {
    return light ? colourPlayerHover : colourPlayer; //if it is light return colour play lit, else return colour play
  } else {
    return light ? colourCompHover : colourComp;
  }
}


function getGridX(col) {
  return cellSize * (col +1);
}


function getGridY(row) {
  return topMargin + cellSize * row;
}


function hightlightGrid(/** @type {MouseEvent} */ e) {
  console.log(e);
  //highlight should only work if it is the players turn
  if (!playersTurn) {
    return;
  }
  //get mouse position relative to canvas
  let a = e.clientX;
  let b = e.clientY;
  let x = a - canvRect.left;
  let y = b - canvRect.top;

  //highlight the square's side

  highlightSide(x, y);

}


function highlightSide(x, y) {
  // clearprevious highlighting
  for (let row of squares) { //iterate over every row of the squares
    for (let square of row) {
      square.highlight = null;
    }
  }
  let rows = squares.length; //useing labels so that when we break loop we break all the loops
  let cols = squares[0].length;//COLLUMS IS THE NUMBER OF THINGS IN DIMENSION 0 OF ARRAY SQUARES
  OUTER: for (let i = 0; i < rows; i++) {
    for (let j = 0; j< cols; j++){
      if(squares[i][j].contains(x, y)) {
        let side = squares[i][j].highlightSide(x, y); 
        break OUTER;
      }
    }
  }
}


function newGame() {
  // deciding who goes first
  playersTurn = Math.random() >= 0.5; // boolean

  //SET UP SQUARES array

  squares = [];
  for (let i =0; i< sizeOfGrid +1; i++) {

    squares[i] = []
      for (let j=0; j< sizeOfGrid +1; j++) {
        squares[i][j] = new Square(getGridX(j), getGridY(i), cellSize, cellSize);
      }
  }
}
function drawGrid() {
  for (let i =0; i< sizeOfGrid +1; i++) //looping rows size of grid is the size of spaces so +1
    for (let j=0; j< sizeOfGrid +1; j++) // looping collumns
      drawDot(getGridX(j), getGridY(i));
}

// when moving mouse want to know what cell we are on, do this by creating an object 
//create square object constructor
function Square(x, y, w, h) {
  this.w = w;
  this.h = h;
  this.bottom = y + h; //this.binds objects to make them easier to call
  this.left = x;
  this.right = x +w;
  this.top = y;
  this.highlight = null;
  this.sideBot = {owner: null, selected: false};
  this.sideLeft = {owner: null, selected: false};
  this.sideRight = {owner: null, selected: false};
  this.sideTop = {owner: null, selected: false};

  this.contains = function(x,y) {
    return x >= this.left && x < this.right && y >= this.top && y < this.bottom; //checks to see if x and y values are inside 
  }

  this.drawFill = function () {
    //TO DO FILL
  }

  this.drawSide = function (side, colour) {
    switch(side) {
      case Side.BOT:
        drawLine(this.left, this.bottom, this.right, this.bottom, colour); //draws line from two corners given by two pairs of sides
        break;
      case Side.LEFT:
          drawLine(this.left, this.top, this.left, this.bottom, colour);
          break;
      case Side.RIGHT:
          drawLine(this.right, this.top, this.right, this.bottom, colour);
          break;
      case Side.TOP:
          drawLine(this.left, this.top, this.right, this.top, colour);
          break;
    }
  }
  
  this. highlightSide = function(x,y) { //takes mouse position as anargument
//uses distancr of mouse from each side to determine what line to draw
    let dBot = this.bottom - y;
    let dLeft = x - this.left;
    let dRight = this.right - x;
    let dTop = y - this.top;


    //determine which side is closest
    let dClosest = Math.min(dBot, dLeft, dRight, dTop );

    //highlight closest if not already selected
    if (dClosest == dBot && !this.sideBot.selected) { //if closest line is bottom line, and bottom line is not selected
      this.highlight = Side.BOT;
    }
    else if (dClosest == dLeft && !this.sideLeft.selected) { //if closest line is left line, and left line is not selected
      this.highlight = Side.LEFT;
    }
    else if (dClosest == dRight && !this.sideRight.selected) { //if closest line is bottom line, and bottom line is not selected
      this.highlight = Side.RIGHT;
    }
    else if (dClosest == dTop && !this.sideTop.selected) { //if closest line is bottom line, and bottom line is not selected
      this.highlight = Side.TOP;
    }
  return this.highlight;
  }

  this.drawSides = function() {
    if (this.highlight != null) {
      this.drawSide(this.highlight, getColour(playersTurn, true)); //calls function drawline which draws a line depending 
    }
  }
}

