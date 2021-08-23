player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){

    number_1 = document.getElementById("num1").value;
    number_2 = document.getElementById("num2").value;

    answer = parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = question_number + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("num1").disabled = true;
    document.getElementById("num2").disabled = true;

    document.getElementById("btn").disabled = true;
}

Question_turn = "player1";
Answer_turn = "player2";

function check(){
    ans = document.querySelector("#input_check_box").value;

    if(ans = answer){
        if(Answer_turn == "player1"){
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }else{
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(Question_turn == "player1"){
        Question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }else{
        Question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }

    if(Answer_turn == "player1"){
        Answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }else{
        Answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }

    document.getElementById("output").innerHTML = "";

    document.getElementById("num1").disabled = false;
    document.getElementById("num2").disabled = false;

    document.getElementById("btn").disabled = false;

}
