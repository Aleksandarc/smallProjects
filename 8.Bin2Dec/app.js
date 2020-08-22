let input = document.querySelector('.input');
let output = document.querySelector('.output');
let button = document.querySelector('.formConvert');
let warning = document.querySelector('.binWarning');

let value = 0;
let o = 1;

button.addEventListener('click', function (e) {
  warning.innerHTML = '';
  for (i = 0; i < input.value.length; i++) {
    if (input.value[input.value.length - 1 - i] == 1) {
      value += o;
    } else if (input.value[input.value.length - 1 - i] == 0) {
      value = value;
    } else {
      warning.innerHTML = 'This is not a proper binary number!';
      value = "WRONG INPUT";
      break;
    }

    o *= 2;
  }

  output.innerHTML = value;

  value = 0;
  o = 1;
});