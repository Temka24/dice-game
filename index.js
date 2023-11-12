
var activePlayer = 1

var currentscore = 0

 var relativeScore1 = 0
 var relativeScore2 = 0

document.getElementById("btn-roll").addEventListener("click", function(){

    var dicenumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice").src = "dice" + dicenumber + ".png"

    if(dicenumber !== 1){
        currentscore = currentscore + dicenumber
        document.getElementById("current-" + activePlayer).textContent = currentscore
    }
    else{
        currentscore = 0

        document.getElementById("current-" + activePlayer).textContent = 0

        if(activePlayer === 1){
            activePlayer = 2
        }
        else{
            activePlayer = 1
        }
    }

} )

document.getElementById("btn-hold").addEventListener("click", function(){

    if(activePlayer === 1){

      relativeScore1 = relativeScore1 + currentscore
    
     document.getElementById("score-1").textContent = relativeScore1
      
     if(relativeScore1 >= 50){
        alert("Player 1 win ")
     }

     activePlayer = 2

     currentscore = 0

     document.getElementById("current-1").textContent = currentscore

    }
    else{ 

        relativeScore2 = relativeScore2 + currentscore
        
        document.getElementById("score-2").textContent = relativeScore2

        if(relativeScore2 >= 50){
        alert("Player 2 win")
    }

        activePlayer = 1

        currentscore = 0

        document.getElementById("current-2").textContent = currentscore

    }

})



document.getElementById("btn-new").addEventListener("click", function(){

    document.getElementById("score-1").textContent = currentscore

    document.getElementById("score-2").textContent = currentscore

    currentscore = 0
    
    activePlayer = 1
     
    relativeScore1 = 0

    relativeScore2 = 0

})

