//GAME PARAMETERS
const heightOfBoard = 550; //pixels
const FPS = 30; //frames per second
const sizeOfGrid = 10; // number of rows and collumns, make larger to get more dots

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

//setting up context

let context = canvas.getContext("2d");
context.lineWidth = strokeSize;

//game variables
let playersTurn, squares;

//start a new game
newGame();

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
function drawSquares() {

}

function getGridX(col) {
  return cellSize * (col +1);
}

function getGridY(row) {
  return topMargin + cellSize * row;
}

function newGame() {
  // deciding who goes first
  playersTurn = Math.random() >= 0.5; // boolean
  //SET UP SQUARES
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
function Square(x,y,w,h) {
  this.w = w;
  this.h = h;
  this.bottom = y + h;
  this.left = x;
  this.right = x +w;
  this.top = y;

  this.contains = function(x,y) {
    return x >= this.left && x < this.right && y >= this.top && y < this.bottom; //checks to see if x and y values are inside 
  }
}
