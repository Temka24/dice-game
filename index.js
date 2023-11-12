var dicenumber = Math.floor(Math.random()+1)
document.getElementById("btn-roll").addEventListener(onclick, function(){
    document.querySelector(".dice").src = "dice" + dicenumber + ".png"
} )