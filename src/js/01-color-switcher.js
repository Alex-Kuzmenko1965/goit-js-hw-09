const refs = {    
  startBtn: document.querySelector("[data-start]"),
  stopBtn: document.querySelector("[data-stop]"),
};
// console.log(refs.startBtn);
// console.log(refs.stopBtn);

refs.startBtn.addEventListener('click', onBtnStart);
refs.stopBtn.addEventListener('click', onBtnStop);

let timerId;

function onBtnStart() {
  console.log('Start');
  timerId = setInterval(changeColor, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
};

function onBtnStop(event) {
  console.log('Stop');
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
};

function changeColor(event) {
  console.log('changeColor');
  document.body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}