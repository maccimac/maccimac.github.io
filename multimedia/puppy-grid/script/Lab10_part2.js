var topPosition = 200;
var leftPosition = -200;

function runPuppy() {

    var puppy = document.getElementById("puppy");

    puppy.style.position = 'fixed'
    puppy.style.visibility = 'visible'

    if(leftPosition > window.screen.availWidth){
      topPosition = 200
      leftPosition = -200
    }else{
      topPosition += 20
      leftPosition += 60
    }

    puppy.style.top = topPosition + 'px'
    puppy.style.left = leftPosition + 'px'


    // add if it reaches the screen end (you can check with screen.availwidth)
}
