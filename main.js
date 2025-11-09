let player1_name = localStorage.getItem("player1_name");
let player2_name = localStorage.getItem("player2_name");

let player1_score = 0;
let player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

let question_turn = "player1";
let answer_turn = "player2";
let actual_answer = 0;

function send() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  let question = "<h4>" + number1 + " × " + number2 + "</h4>";
  let input_box = "<input type='text' id='input_check_box' placeholder='Your answer'>";
  let check_button = "<button onclick='check()'>Check</button>";

  document.getElementById("output").innerHTML = question + input_box + check_button;

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

function check() {
  let get_answer = document.getElementById("input_check_box").value;
  if (get_answer == actual_answer) {
    if (answer_turn == "player1") {
      player1_score++;
      document.getElementById("player1_score").innerHTML = player1_score;
    } else {
      player2_score++;
      document.getElementById("player2_score").innerHTML = player2_score;
    }
  }

  if (question_turn == "player1") {
    question_turn = "player2";
    answer_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
  } else {
    question_turn = "player1";
    answer_turn = "player2";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
  }

  document.getElementById("output").innerHTML = "";
}
