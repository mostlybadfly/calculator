document.addEventListener('DOMContentLoaded', init, false);

var numStack = []
var opStack = []
var operation = {
  '+': function(a,b) { return a + b},
  '-': function(a,b) { return a - b},
  '*': function(a,b) { return a * b},
  '/': function(a,b) { return a / b}
}

  function appendNum() {
    if (!numPressed) {
      result.value = "";
    }
    result.value = (result.value + this.innerHTML);
    numPressed = true;
  }

  function performOp() {
    if (result.value!='' && numPressed) {
      if (numStack.length == 0) {
        numStack.push(result.value);
        opStack.push(this.innerHTML);
      } else {
        result.value = operation[opStack.pop()](Number(numStack.pop()), Number(result.value));
        numStack.push(result.value);
        opStack.push(this.innerHTML);
      }
    }
    numPressed = false;
  }

  function evalResult() {
    if (result.value!='' && numPressed) {
      if (numStack.length==1) {
        result.value = operation[opStack.pop()](Number(numStack.pop()), Number(result.value));
      }
    }
    numPressed = false;
  }

  function clearBox() {
    numStack = [];
    opStack = [];
    result.value = "";
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

  numPressed = false;

  var clearButton = document.getElementById("clearbtn");

  clearButton.addEventListener("click", clearBox, false);
}
