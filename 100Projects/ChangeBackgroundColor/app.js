const bg = document.querySelector('.container');
const btn = document.querySelector('.changeColor');
const text = document.querySelector('.currentColor');

btn.addEventListener('click', () => {
  bg.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  var result = '#';
  for (i = 0; i < 6; i++) {
    result += options[Math.floor(Math.random() * options.length)];
  }
  return result;
}