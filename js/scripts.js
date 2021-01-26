const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calculator__keys’)

keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
   // Do something
 }
})

const key = e.target
const action = key.dataset.action

if (!action) {
  console.log('number key!')
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}

if (action === 'decimal') {
  console.log('decimal key!')
}

if (action === 'clear') {
  console.log('clear key!')
}

if (action === 'calculate') {
  console.log('equal key!')
}



//Business Logic

const add = function(number1, number2) {
    return number1 + number2;
  };
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  const multiply = function(number1, number2) {
    return number1 * number2;
  };
  
  const divide = function(number1, number2) {
    return number1 / number2;
  };


//User Interface Logic

$(document).ready(function() {
    $("form#add").submit(function(event) {
        event.preventDefault();
        const number1 = parseInt($("#add1").val());
        const number2 = parseInt($("#add2").val());
        const result = add(number1, number2);
        $("#output").text(result);
    });
  });

  $(document).ready(function() {
    $("form#subtract").submit(function(event) {
        event.preventDefault();
        const number1 = parseInt($("#subtract1").val());
        const number2 = parseInt($("#subtract2").val());
        const result = subtract(number1, number2);
        $("#output").text(result);
    });
  });


  $(document).ready(function() {
    $("form#multiply").submit(function(event) {
        event.preventDefault();
        const number1 = parseInt($("#multiply1").val());
        const number2 = parseInt($("#multiply2").val());
        const result = multiply(number1, number2);
        $("#output").text(result);
    });
  });


  $(document).ready(function() {
    $("form#divide").submit(function(event) {
        event.preventDefault();
        const number1 = parseInt($("#divide1").val());
        const number2 = parseInt($("#divide2").val());
        const result = divide(number1, number2);
        $("#output").text(result);
    });
  });