
import Crucify from "./common/Crucify.js";

console.log("we in");

// start new game
let f0 = document.getElementById("f0");
let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let f3 = document.getElementById("f3");
let f4 = document.getElementById("f4");
let f5 = document.getElementById("f5");
let f6 = document.getElementById("f6");
let f7 = document.getElementById("f7");
let f8 = document.getElementById("f8");
let f9 = document.getElementById("f9");
let f10 = document.getElementById("f10");
let f11 = document.getElementById("f11");
let f12 = document.getElementById("f12");
let f13 = document.getElementById("f13");
let f14 = document.getElementById("f14");
let f15 = document.getElementById("f15");
let gameBoard = document.getElementById("board");
let button = document.getElementById("btnNewGame");
let BOARD_SIZE = 16;
let numberOfRows = 4;
let UNOCCUPIED = " ";
let Player_1 = "X";
let Player_2 = "O";
let playersTurn = "Player1";
let numberOfTurns = 0;
const BOARD = new Array();
const fixedArray = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3];
//graphics

let graphicsX = `<svg viewBox="0 0 45.2 47.95">
<defs>
    <style>
        .xcls-1 {
            fill: #18556b;
        }

        .xcls-2 {
            fill: #29b2e2;
        }
    </style>
</defs>
    <polygon class="xcls-1" points="35.9 47.51 30.67 42.28 20.77 27.38 29.88 26.8 35.9 47.51" />
    <path class="xcls-1"
        d="M39.19.29A1,1,0,0,0,38.48,0H31.41a1,1,0,0,0-.8.4l-9.83,13a1,1,0,0,1-.8.4c-.26,0,4.9,8,4.9,8C25.07,22,44.23,5.35,44.41,5.53Z" />
    <path class="xcls-1"
        d="M14.76,5.52,9.54.29A1,1,0,0,0,8.83,0H1.71a1,1,0,0,0-1,1V5.12a1,1,0,0,0,.2.61L11.2,19.63a1,1,0,0,1,0,1.15h0L.18,37a1,1,0,0,0-.17.56v4.14a1,1,0,0,0,.29.71l5.22,5.23c-.17-.18,15.63-28.52,15.37-28.86C20.88,18.8,14.58,5.34,14.76,5.52Z" />
    <path class="xcls-2"
        d="M43.71,5.23a1,1,0,0,1,1,1v4.12a1,1,0,0,1-.21.61L33.61,24.84a1,1,0,0,0,0,1.19L45,42.24a1,1,0,0,1,.18.58V47a1,1,0,0,1-1,1H36.73a1,1,0,0,1-.83-.44L26,32.61a1,1,0,0,0-.82-.44,1,1,0,0,0-.84.45L14.51,47.5a1,1,0,0,1-.84.45H6.22a1,1,0,0,1-1-1V42.81a1,1,0,0,1,.17-.56L16.45,26a1,1,0,0,0,0-1.15L6.12,11a1,1,0,0,1-.2-.6V6.23a1,1,0,0,1,1-1h7.12a1,1,0,0,1,.81.42l9.52,13a1,1,0,0,0,.81.41,1,1,0,0,0,.8-.4l9.83-13a1,1,0,0,1,.81-.41Z" />
</svg>`;

let graphicsO = `<svg  viewBox="0 0 52.68 50.95">
<defs>
    <style>
        .ocls-1 {
            fill: #7a1f1f;
        }

        .ocls-2 {
            fill: #c33;
        }
    </style>
</defs>
    <path class="ocls-1"
        d="M32.89,12.76a13.94,13.94,0,0,1,3.83,10.13c0,8-5.36,13.66-13,13.66A12.66,12.66,0,0,1,14.54,33L29.22,50.29l20-25Z" />
    <path class="ocls-1"
        d="M41.16,6.61C37,2.43,31,0,23.79,0,9.71,0,0,9.35,0,22.89A22.34,22.34,0,0,0,6.27,39.12l5.22,5.23c-4-4,4.73-32.06,4.73-32.06s25-1,30.17-.45Z" />
    <path class="ocls-2"
        d="M29,5.23c14.07,0,23.7,9.35,23.66,22.9S43,51,28.89,51,5.19,41.66,5.23,28.13,14.93,5.23,29,5.23Zm-.1,36.56c7.66,0,13-5.64,13-13.66S36.66,14.4,29,14.4,16,20,16,28.13s5.29,13.66,13,13.66" />
</svg>`;

NewGame();
//event listeners

f0.addEventListener("click", function clickster0() {
  PlayUser(0,playersTurn);
});
f1.addEventListener("click", function clickster1(){
  PlayUser(1,playersTurn);
});
f2.addEventListener("click", function clickster2(){
  PlayUser(2,playersTurn);
});
f3.addEventListener("click", function clickster3(){
  PlayUser(3,playersTurn);
});
f4.addEventListener("click", function clickster4(){
  PlayUser(4,playersTurn);
});
f5.addEventListener("click", function clickster5(){
  PlayUser(5,playersTurn);
});
f6.addEventListener("click", function clickster6(){
  PlayUser(6,playersTurn);
});
f7.addEventListener("click", function clickster7(){
  PlayUser(7,playersTurn);
});
f8.addEventListener("click", function clickster8(){
  PlayUser(8,playersTurn);
});
f9.addEventListener("click", function clickster9(){
  PlayUser(9,playersTurn);
});
f10.addEventListener("click", function clickster10(){
  PlayUser(10,playersTurn);
});
f11.addEventListener("click", function clickster11(){
  PlayUser(11,playersTurn);
});
f12.addEventListener("click", function clickster12(){
  PlayUser(12,playersTurn);
});
f13.addEventListener("click", function clickster13(){
  PlayUser(13,playersTurn);
});
f14.addEventListener("click", function clickster14(){
  PlayUser(14,playersTurn);
});
f15.addEventListener("click", function clickster15(){
  PlayUser(15,playersTurn);
});
button.addEventListener("click", NewGame());

console.log(BOARD);

//if button is pressed starts a new game
button.addEventListener("click", function restart(){
  playersTurn = "Player1";
  NewGame();
});


function NewGame() {
  //new game should clear the board and pick the player that is playing as well as set variables to 0
  console.log("bababooey");
  if (playersTurn == "Player1" || GameOver(BOARD)) {
    //makes it so button cannot be pressed
    document.getElementById("btnNewGame").disabled = true;
    //cleans the board
    CleanBoard();
    // Set BOARD HTML color to busy
    //document.getElementsByTagName("board")[0].classList.add("busy");
    //ShowMessage("Setting up new game...");
    //makes button pressable again
    shufflePlayer();
    document.getElementById("btnNewGame").disabled = false;
  }
}


// Clean the fields in HTML and reset BOARD array
function CleanBoard() {
  for(let i = 0; i < BOARD_SIZE; i++) {
    BOARD[i] = UNOCCUPIED;
    document.getElementById(`f${i}`).innerHTML = "";
  }
  console.log(BOARD);
}


//onclick function that fills the board
//function should take argument and depending on player will do differnet things
// Function for triggering USER move
function PlayUser(position,playersTurn) {
  console.log(playersTurn);
  MakeMove(position,playersTurn);
  switchPlayer(playersTurn)
  console.log(playersTurn);
}

//switches the player every turn
function switchPlayer() {
  if (playersTurn === "Player2") {
    playersTurn = "Player1";
  } else {
    playersTurn = "Player2";
  }
}

//shuffles who goes first

function shufflePlayer() {
  let random = Math.random() >= 0.5;
  if (random) {
    playersTurn = "Player1";
  } else {
    playersTurn = "Player2";
  }
}


// Universal function for setting USER and COMPUTER moves
function MakeMove(position,playersTurn) {
  if (!GameOver(BOARD) && BOARD[position] === UNOCCUPIED) {
    let activeSymbol = Crucify.GetPlayerSymbol(playersTurn);
    RenderMove(position, activeSymbol);
    BOARD[position] = activeSymbol;
    console.log(BOARD);
    //check special rules
    acrossForwards(position,playersTurn);
    acrossBackwards(position,playersTurn);
    horizontalUp(position,playersTurn);
    horizontalDown(position,playersTurn);
    diagonalDownRight(position,playersTurn);
    diagonalDownLeft(position,playersTurn);
    diagonalUpLeft(position,playersTurn);
    diagonalUpRight(position,playersTurn);
    topLeftCorner(position,playersTurn);
    topRightCorner(position,playersTurn);
    bottomRightCorner(position,playersTurn);
    bottomLeftCorner(position,playersTurn);
    //gameover board returns true if the game is over
    return !GameOver(BOARD);
  }
  return false;
}


// Render/Show played move in HTML
function RenderMove(position, player) {
  return new Promise(function () {
    document
      .getElementById(`f${position}`)
      .insertAdjacentHTML("beforeend", player == "X" ? graphicsX : graphicsO);
  });
}

function player1sTurn() {
  if (ACTIVE_TURN == "Player1") {
    return true;
  } else {
    return false;
  }
}

//checks if gameover
function GameOver(board) {
  switch (Crucify.CheckForWinner(board)) {
    case 1:
      console.log("tie");
      break;
    case 2:
      console.log("Player 1 win");
      
      //ShowMessage("You win! Congratulations!", PLAYER1);
      break;
    case 3:
      console.log("player2 win");
      //ShowMessage("Computer wins this time!", PLAYER2);
      break;
    default:
      return false;
  }
  // Game is over, return true and set BOARD HTML color to busy
  document.getElementsByTagName("MAIN")[0].classList.add("busy");
  return true;
}


//teh following functions are the special moves
function acrossForwards(position,player) {
  if (fixedArray[position]<2) {
    if (BOARD[position+1] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position+2] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position+1] = UNOCCUPIED;
        document.getElementById(`f${position + 1}`).innerHTML = "";
      }
    }
  }
}

function acrossBackwards(position,player) {
  if (fixedArray[position]>1) {
    if (BOARD[position-1] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position-2] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position-1] = UNOCCUPIED;
        document.getElementById(`f${position - 1}`).innerHTML = "";
      }
    }
  }
}

function horizontalUp(position,player) {
  if (position > 7) {
    if (BOARD[position-4] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position-8] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position-4] = UNOCCUPIED;
        document.getElementById(`f${position - 4}`).innerHTML = "";
      }
    }
  }
}

function horizontalDown(position,player) {
  if (position < 8) {
    if (BOARD[position+4] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position+8] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position+4] = UNOCCUPIED;
        document.getElementById(`f${position + 4}`).innerHTML = "";
      }
    }
  }
}

function diagonalDownRight(position,player) {
  if (position == 8 || position == 9 || position == 12 || position == 13) {
    if (BOARD[position-3] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position-6] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position -3] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${position - 3}`).innerHTML = "";
        RenderMove(position-3, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}

function diagonalDownLeft(position,player) {
  if (position == 10 || position == 11 || position == 14 || position == 15) {
    if (BOARD[position-5] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position-10] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position -5] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${position - 5}`).innerHTML = "";
        RenderMove(position-5, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}

function diagonalUpRight(position,player) {
  if (position == 2 || position == 3 || position == 6 || position == 7) {
    if (BOARD[position+3] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position+6] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position +3] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${position + 3}`).innerHTML = "";
        RenderMove(position+3, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}

function diagonalUpLeft(position,player) {
  if (position == 0 || position == 1 || position == 4 || position == 5) {
    if (BOARD[position+5] == Crucify.getOppositeSymbol(player)) {
      if(BOARD[position+10] == Crucify.GetPlayerSymbol(player)) {
        BOARD[position +5] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${position + 5}`).innerHTML = "";
        RenderMove(position+5, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}

function topLeftCorner(position,player) {
  if (position == 1 || position == 4 || position == 5 ) {
    let cornerCounter = 0;
    if (BOARD[0] == Crucify.getOppositeSymbol(player)) {
      if (BOARD[1] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[4] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[5] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (cornerCounter ==3) {
        BOARD[0] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${0}`).innerHTML = "";
        RenderMove(0, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}

function topRightCorner(position,player) {
  if (position == 2 || position == 6 || position == 7 ) {
    let cornerCounter = 0;
    if (BOARD[3] == Crucify.getOppositeSymbol(player)) {
      if (BOARD[2] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[6] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[7] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (cornerCounter ==3) {
        BOARD[3] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${3}`).innerHTML = "";
        RenderMove(3, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}

function bottomLeftCorner(position,player) {
  if (position == 8 || position == 9 || position == 13 ) {
    let cornerCounter = 0;
    if (BOARD[12] == Crucify.getOppositeSymbol(player)) {
      if (BOARD[8] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[9] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[13] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (cornerCounter ==3) {
        BOARD[12] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${12}`).innerHTML = "";
        RenderMove(12, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}

function bottomRightCorner(position,player) {
  if (position == 10 || position == 11|| position == 14 ) {
    let cornerCounter = 0;
    if (BOARD[15] == Crucify.getOppositeSymbol(player)) {
      if (BOARD[10] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[11] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (BOARD[14] == Crucify.GetPlayerSymbol(player)) {
        cornerCounter++
      }
      if (cornerCounter ==3) {
        BOARD[15] = Crucify.GetPlayerSymbol(player);
        document.getElementById(`f${15}`).innerHTML = "";
        RenderMove(15, Crucify.GetPlayerSymbol(player));
      }
    }
  }
}