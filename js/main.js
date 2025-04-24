/*----- constants -----*/


  /*----- state variables -----*/
//Define, but do not assign to (initialize)
let board; //2DArray / 1/-1 -> player value; null -> cell is empty
let winner; // null -> no winner or tie, gamie is in progress; 1/-1 -> the player the won; 'Tie' - > the game is tied
let turn; // 1/-1 -> the player whose turn it is

  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/

  //The init's function's purpose is to initialize all state, then call render()
  function init() {

    winner = null;
    turn = 1;
    // render();
  }