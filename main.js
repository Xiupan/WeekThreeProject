var inputArr = [];

var numberButton = document.getElementsByClassName('number-button'); // returns value of numbered button clicked on and pushes to display array
for(let i = 0; i < numberButton.length; ++i){
  numberButton[i].onclick = function(){
    var numArr = document.getElementsByClassName('number-content');
    for(var q = 0; q < numArr.length; ++q){
      var num = numArr[i].innerHTML;
      inputArr.push(num);
      console.log(numberButton);
      break;
    }
    var outputNumbers = inputArr.join('');
    document.getElementById('display').innerHTML = outputNumbers;
    console.log(outputNumbers);
  }
}

var clearButton = document.getElementById('clear');
clearButton.onclick = function(){
  inputArr = [];
  document.getElementById('display').innerHTML = inputArr;
  console.log(inputArr);
}

var operationButton = document.getElementsByClassName('operation'); // returns value of operands clicked on and pushes to display array
for(let p = 0; p < operationButton.length; ++p){
  operationButton[p].onclick = function(){
    var operationArr = document.getElementsByClassName('operation-content');
    for(var w = 0; w < operationArr.length; ++w){
      var operand = operationArr[p].innerHTML;
      inputArr.push(operand);
      console.log(inputArr);
      var outputNumbers = inputArr.join('');
      document.getElementById('display').innerHTML = outputNumbers;
      console.log(outputNumbers);
      break;
    }
  }
}

var equalsButton = document.getElementById('equals');
equalsButton.onclick = function(){
  var intermediateOutput = inputArr.join('');
  var finalOutput = eval(intermediateOutput);
  if(finalOutput === undefined){
    finalOutput = [];
  }
  document.getElementById('display').innerHTML = finalOutput;
  inputArr = finalOutput.toString().split('');
  console.log(inputArr, finalOutput);
  // finalOutput = [];
  // inputArr = [];
}

var decimalButton = document.getElementById('decimal-content');
decimalButton.onclick = function(){
  inputArr.push('.');
  var outputWithDecimals = inputArr.join('');
  document.getElementById('display').innerHTML = outputWithDecimals;
  console.log(outputWithDecimals);
}

var sqrtButton = document.getElementById('sqrt-content');
sqrtButton.onclick = function(){
  if(typeof inputArr === NaN){
    document.getElementById('display').innerHTML = Math.sqrt(inputArr);
    console.log(typeof inputArr);
  } else {
    document.getElementById('display').innerHTML = Math.sqrt(eval(inputArr.join('')));
    console.log(typeof inputArr);
  }
  inputArr = [];
}

var moduloButton = document.getElementById('modulo-content')
moduloButton.onclick = function(){
  inputArr.push('%');
  var outputWithModulo = inputArr.join('');
  document.getElementById('display').innerHTML = outputWithModulo;
  console.log(outputWithModulo);
}
