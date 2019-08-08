function playGame(){
var enterCabin = confirm("You come across a strange house in the woods. Do you want to go in?");

if(enterCabin == true){
   var porridgeChoice = prompt("You walk into the cabin and see a lovely kitchen. On the table there are three bowls of porridge. Do you try 1, 2 or 3?");
   if (porridgeChoice == 1){
     alert("The porridge is too hot! The End.")
   }
   else if(porridgeChoice == 2){
     alert("The porridge is too cold! The End."); 
   }
   else {
     alert("This porridge is just right!");
   }


var chairChoice = prompt("You walk into the living room and see three chairs.  A big one, medium on and small one.  Which do you choose?");
if(chairChoice == "big"){
  alert("The chair is way too big!  The End");
}
else if(chairChoice == "medium"){
  alert("The chair is kind of too big.  The End");

}
else{
    alert("This chair is just right...");
    var bedChoice = prompt("You walk into the next room over and see three beds, A big one, a medium one and a small one.  Which one do you choose?");
    if(bedChoice == "big"){
        alert("It's too hard and you can't sleep.  The End!");
    }
    else if(bedChoice == "medium"){
        alert("Ith's too soft and you can't sleep.  The End!");
    }
    else {
        alert("It's just right and you fall into a deep slunmber.");
        alert("You wake up to see three bears looking at you.");
        alert("Shocked you get up and run away never to return again.");
        }
    }
}
else {
    alert("You don't go into the cabin. Well...That's all Folks. The End.");
    }
    
    var playAgain = confirm("Do you want to play again");
    if (playAgain == true){
      playGame()
    }
}
playGame()