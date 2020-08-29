const btnOn = document.querySelector('.on');
const btnOff = document.querySelector('.off');

const circle = document.querySelector('.circle');

btnOff.addEventListener("click", turnOff);
btnOn.addEventListener("click", turnOn);

function turnOff() {
  for (var i = 0; i < len; i++) {
    circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
    circle[i].style.WebkitAnimationPlayState = "running";
  }
}

function turnOn() {}