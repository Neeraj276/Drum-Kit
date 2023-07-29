document.addEventListener("keypress", function (event) {
  var sss = event.key;
  sound(sss);
  addanimation(sss);
});

var numberodDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i <= numberodDrumButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var out = this.innerHTML;
sound(out);
addanimation(out);
  }
  );
  
}



function sound(key){
    switch (key) {
      case "w": var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a": var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s": var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d": var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j": var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "k": var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l": var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    }
}

function addanimation(currentkey){
  var presskey = document.querySelector("."+currentkey);
  presskey.classList.add("pressed");
  setTimeout(function () {
    presskey.classList.remove("pressed");
  }, 100);
}





