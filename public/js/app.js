document.addEventListener('DOMContentLoaded', init, false);
// no DOM logic before init.
// include a stack to store numbers and ops
  function appendNum() {
    // this is good for appending the number to the textfield.
    // needs to add the number clicked to the stack as well
    if (clearOnInput==true) {
      result.value = "";
    }
    result.value = (result.value + this.innerHTML);
    clearOnInput = false;
  }

  function performOp() {
    // this will need to append an operation to the stack vs just the textfield.
    // op buttons should be deactivated once one is pushed, until after a number
    // checking below for value, if value push to stack along with op
    if (result.value!='') {
    alert(result.value);
    } else {
      alert("no value in textfield");
    }
  }

  function evalResult() {
    // needs to be rewriten so that num, op, num are being performed
    // triggered when a second op or equals is clicked
    var result = document.getElementById("result");
    result.value = result.value ? eval(result.value) : '';
    clearOnInput = true;
  }

  function clearBox() {
    result = document.getElementById("result");
    result.value = "";
    // needs logic to clear the current result
  }

function init(){
  result = document.getElementById("result");

  var numButtons = document.getElementsByClassName("numbtn");

  for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", appendNum, false);
  };

  var oprButtons = document.getElementsByClassName("oprbtn");

  for (var i = 0; i < oprButtons.length; i++) {
    oprButtons[i].addEventListener("click", performOp, false);
  };

  var equalButton = document.getElementById("equalsbtn");

  equalButton.addEventListener("click", evalResult, false);

  clearOnInput = false;

  var clearButton = document.getElementById("clearbtn");

  clearButton.addEventListener("click", clearBox, false);
}
