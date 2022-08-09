let text = ""
let parsedA, parsedB = 0;
let operation = null

function setValues(){
  operandA = document.getElementById('input_a').value
  operandB = document.getElementById('input_b').value

  parsedA = parseInt(operandA)
  parsedB = parseInt(operandB)

  console.log({parsedA, parsedB})

  clear()

  if( isNaN(parsedA) | isNaN(parsedB) ){
    if((isNaN(parsedA) && isNaN(parsedA))){
      document.mycalculator.output.value = `Operands ${operandA} and ${operandB} are both not numbers`
    }else{
      let notNum  = isNaN(parsedA) ? operandA : operandB
      notNum = (isNaN(parsedA) && isNaN(parsedA)) ? notNum : `${operandA} and ${operandB}`
      document.mycalculator.output.value = `Operand ${notNum} is not a number`
    }
    return false
  }
  return true
}

function addValue(){
    if (!setValues()) return
    let total = parsedA + parsedB
    text = `${parsedA} + ${parsedB} = ${total}`
    document.mycalculator.output.value = text;
}


function mulValue(){
    if (!setValues()) return
    let result = parsedA * parsedB
    text = `${parsedA} x ${parsedB} = ${result}`
    document.mycalculator.output.value = text;
    console.log(text)
}

function divValue(){
    if (!setValues()) return
    let result = parsedA / parsedB
    text = `${parsedA} : ${parsedB} = ${result}`
    document.mycalculator.output.value = text;
    console.log(text)
}

function clear(){
  document.getElementById('input_a').value = ''
  document.getElementById('input_b').value = ''
}



// Requirements:
// 1. Create a lastName_STUDENT-ID_lab7.html and put a basic structure where the body contain header, section
// and footer. The form is implemented within the section.
// 2. You can use any color scheme, but please choose the color nicely. Do not hurt the viewers’ eyes
// Note: the color used to generate the form in the picture were lightsteelblue and slategray
// 3. Please set all your css style declarations in a separate file that is stored in a css folder.
// 4. The form contains two fieldsets as shown above. The first fieldset contains a textarea. The second fieldset
// contains text controls and buttons. The clear button is the reset button. You can use the special character
// &times; to display the multiplication symbol.
// 5. Please utilize the appropriate attributes (such as name, id, placeholder, value, required, etc) for the form and
// its elements.
// 6. Create a JavaScript function and its corresponding event handler for each of the addition, multiplication and
// division buttons.
// 7. Make sure that the values from the textbox are parsed into integer or float whenever necessary. You can
// use ParseInt method of JavaScript.
// 8. If the user clicks any of the operator buttons, you need to display the operands, operator and output in the
// textarea as you can see in the picture on the right. The same output should also be printed at the console.
// You can access the text area of the form by document.mycalculator.output. You need to modify its values.
// 9. Also, it is better to add conditions to check the contents of your inputs and message proper note.
