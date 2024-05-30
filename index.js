const display = document.getElementById('display-screen')


function addFunctionality(input){
  display.value += input

}

function calculate(){
  try{
    display.value = eval(display.value)
  }
  catch(error){
    display.value =  "error"
  }

}
function clearDisplay(){
display.value = ""
}
function deleteDisplay(){
display.value = display.value.toString().slice(0, -1)
}