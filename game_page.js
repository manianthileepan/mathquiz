player_1_name=localStorage.getItem("player1");
player_2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player_1_name+":";

document.getElementById("player2name").innerHTML=player_2_name+":";

document.getElementById("player1score").innerHTML=player1_score;

document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("playerq").innerHTML="question turn-"+player_1_name;

document.getElementById("playera").innerHTML="answer turn-"+player_2_name;

function send(){
  getword=document.getElementById("word").value;
word=getword.tolowerCase();

charat1=word.charAt(1);

length_devide_2=math.floor(word.length/2);
charat2=word.charAt(length_divide_2);

length_minus_1=word.length-1;
charat3=wors.charAt(length_minus_1);

remove_charat1=word,replace(charat1,"_");
remove_charat2=remove_charat1.replace(charat2,"_");
remove_charat3=remove_charat2.replace(charat3,"_");

qeestion_word= "<h4 id='word_display'>q."+remove_charat3+"</h4>";
inputbox="<br>Answer:<input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row= question_word+inputbox+checkbutton;
document.getElementById("output"),innerHTML=row;
document.getElementById("word").value="";
}

qt= "player1"
at="player2"
function  check(){
  get_answer= document.getElementById("input_check_box").value;
  answer=get_answer.tolowercase();
  console.log("answer in lower case-"=answer);
  if(answer==word)
  {
    if(at=="player1")
{
  player1_score=player1_score+1;
  document.getElementById("player1score").innerHTML=player1_score;
}
    else
    {
      player2_score=player2_score+1;
      document.getElementById("player2score").innerHTML=player2_score;
    }
  }
  if(qt=="player1")
  {
    qt="player2"
    document.getElementById("playerq")
.innerHTML ="question turn-"+player_2_name;
}
else
{
  qt="player1"
  document.getElementById("playerq")
.innerHTML ="question turn-"+player_1_name;
}
}
if(at=="player1")
  {
    at="player2"
    document.getElementById("playera")
.innerHTML ="answer turn-"+player_2_name;
}
else
{
  at="player1"
  document.getElementById("playera")
.innerHTML ="answer-"+player_1_name;
}