var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow", null, "red", "green"];

var curFontColor=1;
var curBgColor=1;


function changeColor( colorArrIndex = 5 ){
  curFontColor = colorArrIndex
  changeFontColor()
}

function changeFontColor(){
  document.getElementById('text').style.color = fontColorArray[curFontColor]
}

function changeBgColor(){
  document.getElementById('td_text').style.backgroundColor = bgColorArray[curBgColor]
}

function changeBg(){
  let bgColorString = document.getElementById('colorsel').value

  switch (bgColorString){
    case "red":
      curBgColor = 8
      break
    case "green":
      curBgColor = 9
      break
    case "blue":
      curBgColor = 3
      break
    default:
      curBgColor = 7
      break
  }

  changeBgColor()

}
