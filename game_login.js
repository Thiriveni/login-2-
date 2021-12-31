
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}
player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")
  
player1_score = 0;
player2_score = 0;

document . getElementById("player1_name").innerHTML = player1_name + " : ";
document . getElementById("player2_name").innerHTML = player2_name + " : ";

document . getElementById("player1_score").innerHTML = player1 ;
document . getElementById("player2_score").innerHTML = player2 ;

document . getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document . getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send () {
  get_word = document.getElementById("word").value;
  word = get_word.tolowercase();
  console.log ("word in lowercase = " + word);

  charAt1 = word.charAt(1);
  console.log(charAt1);

  lenght_divide_2 = math_floor(word.lenght/2);
  charAt2 = word.charAt(lenght_divide_2);
  console.log(charAt3)

  lenght_minus_1 + word.lenght - 1;
  charAt3 = word.charAt(lenght_minus_1);
  console.log(charAt3);

  remove_charAt1 = word.replace(charAt1, "_");
  remove_charAt2 = remove_charAt1.replace(charAt1, "_");
  remove_charAt3 = remove_charAt2.replace(charAt2, "_");

  question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
  "input_box = <br>Answer : <input type= 'text' id='input_check_box'>";
  check_buton = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
  row = question_word + inputbox + check_buton ;
  document.getElementById("output").innerHTML = row;
  document.getElementById("word").value = "";
}