function playGame() {

var enterCabin = confirm("You come across a strange house in the woods. Do you want to go in?");

  if (enterCabin == true){

    var porridgeChoice = prompt("You walk into the cabin and see a lovely kitchen. On the table there are three bowls of porridge. Do you try 1, 2 or 3?");
      
      switch (porridgeChoice) {
        
        case "1":
        alert("The porridge is too hot! The End.");
        enterCabin = False;
        break;
        
        case "2":
        alert("The porridge is too cold! The End.");
        enterCabin = False;
        break;
        
        case "3":
        alert("This porridge is just right!");
      }
  

    if (enterCabin == true) {
      
      var chairChoice = prompt("You walk into the living room and see three chairs.  A big one, medium on and small one.  Which do you choose?");

        switch (chairChoice) {
            
            case "big":
            alert("The big chair is way too big!  The End");
            enterCabin = False
            break;
            
            case "medium":
            alert("The medium chair is too big.  The End");
            enterCabin = False
            break;
            
            case "small":
            alert("This chair is just right...");
        }
    }

    if (enterCabin == true) {
      
      var bedChoice = prompt("You walk into the next room over and see three beds, A big one, a medium one and a small one.  Which one do you choose?");

      switch (bedChoice) {
          
          case "big":
          alert("It's too hard and you can't sleep.  The End!");
          breakenterCabin = False
          break;
          
          case "medium":
          alert("It's too soft and you can't sleep.  The End!");
          enterCabin = False
          break;
          
          case "small":
          alert("It's just right and you fall into a deep slumber.");
          alert("You wake up to see three bears looking at you.");
          alert("Shocked you get up and run away never to return again.");
      }

    }
  }
  else {
    alert("Well...That's all Folks. The End.");
  }
}

var playAgain = confirm("Do you want to play again");

  if (playAgain == true) {
    playGame()
  }

  playGame()
