document.addEventListener('DOMContentLoaded', init, false);

function init(){
  function appendNum() {
    var result = document.getElementById("result");
    result.value = (result.value + this.innerHTML);
  }

  function performOp() {
    var result = document.getElementById("result");
    result.value = (result.value + this.innerHTML);
  }

  function evalResult() {
    var result = document.getElementById("result");
    result.value = result.value ? eval(result.value) : '';
  }

  function clearBox() {
    result = document.getElementById("result");
    result.value = "";
  }
    
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

  var clearButton = document.getElementById("clearbtn");

  clearButton.addEventListener("click", clearBox, false);
}
