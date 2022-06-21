/**
 * @namespace CRUCIFY
 * @author A. Yoshiki Connor Berrecloth
 * @version 2021/22
 */
const Crucify = Object.create(null);

let Player_1 = "X";
let Player_2 = "O";
let UNOCCUPIED = " ";
let BOARD_SIZE = 16;

// Gets an array of moves not claimed by either player
Crucify.GetAvailableMoves = function (board) {
  var possibleMoves = new Array();
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (board[i] === UNOCCUPIED) possibleMoves.push(i);
  }
  return possibleMoves;
}


Crucify.GetPlayerSymbol = function (playersTurn) {
  if (playersTurn == "Player1") {
    console.log("player 1");
    return Player_1;
  } else {
    console.log("player2");
    return Player_2;
  }
}

Crucify.getOppositeSymbol = function (playersTurn) {
  if (playersTurn == "Player1") {
    console.log("player 1");
    return Player_2;
  } else {
    console.log("player2");
    return Player_1;
  }
}


Crucify.CheckForWinner = function(board){
  console.log("cheese");
 // Check for horizontal wins
  for (let i = 0; i <= 12; i += 4) {//every 4 is a new row
    if (
      board[i] !== UNOCCUPIED && //only bother checking the horizontal row if the first one is occupied
      board[i] === board[i + 1] &&//checking if the next in te row equals the first one
      board[i] === board[i + 2] &&
      board[i] === board[i + 3]
    )
      return board[i] == Player_1 ? 2 : 3;
  }

  // Check for vertical wins
  for (let i = 0; i <= 3; i++) {
    if (
      board[i] !== UNOCCUPIED &&
      board[i] === board[i + 4] &&
      board[i] === board[i + 8] &&
      board[i] === board[i + 12]
    )
      return board[i] == Player_1 ? 2 : 3;
  }

  // Check for main diagonal win
  if (
    board[0] !== UNOCCUPIED &&
    board[0] === board[5] &&
    board[0] === board[10] &&
    board[0] === board[15]
  ) {
    return board[0] == Player_1 ? 2 : 3;
  }
  // Check for other diagonal win
  if (
    board[3] !== UNOCCUPIED &&
    board[3] === board[6] &&
    board[3] === board[9] &&
    board[3] === board[12]
  ) {
    return board[3] == Player_1 ? 2 : 3;
  }

  // Game is not over
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (board[i] === UNOCCUPIED) return 0;
  }
  // It is a tie
  return 1;
}


export default Object.freeze(Crucify);