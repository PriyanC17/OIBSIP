function clearScreen() {
    document.getElementById('screen').value = '';
  }
  
  function backspace() {
    let screenValue = document.getElementById('screen').value;
    document.getElementById('screen').value = screenValue.substring(0, screenValue.length - 1);
  }
  
  function appendValue(value) {
    document.getElementById('screen').value += value;
  }
  
  function calculate() {
    let expression = document.getElementById('screen').value;
    if (expression) {
      let result = eval(expression);
      document.getElementById('screen').value = result;
    }
  }
  