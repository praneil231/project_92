// Default names
let player1_name = "Player 1";
let player2_name = "Player 2";

// Scores
let player1_score = 0;
let player2_score = 0;

// Display names and scores
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

let question_turn = "player1";
let answer_turn = "player2";
let actual_answer = null;

document.getElementById("sendBtn").addEventListener("click", send);

function send() {
  const n1 = document.getElementById("number1").value.trim();
  const n2 = document.getElementById("number2").value.trim();

  if (n1 === "" || n2 === "" || isNaN(n1) || isNaN(n2)) {
    alert("Please enter valid numbers!");
    return;
  }

  actual_answer = parseInt(n1) * parseInt(n2);

  const question = `<h4>${n1} × ${n2}</h4>`;
  const input_box = "<br>Answer: <input type='text' id='input_check_box' class='form-control'>";
  const check_button = "<br><button id='checkBtn' class='btn btn-info'>Check</button>";

  document.getElementById("output").innerHTML = question + input_box + check_button;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";

  document.getElementById("checkBtn").addEventListener("click", check);
}

function check() {
  const answerField = document.getElementById("input_check_box");
  const userAnswer = answerField.value.trim();

  if (userAnswer === "") {
    alert("Enter an answer first!");
    return;
  }

  if (parseInt(userAnswer) === actual_answer) {
    if (answer_turn === "player1") {
      player1_score++;
      document.getElementById("player1_score").innerHTML = player1_score;
    } else {
      player2_score++;
      document.getElementById("player2_score").innerHTML = player2_score;
    }
    alert(" Correct!");
  } else {
    alert(" Wrong! The correct answer was " + actual_answer);
  }

  // Switch turns
  if (question_turn === "player1") {
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
