import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  input: document.getElementById('datetime-picker'),
  btn: document.querySelector('button'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let countDownDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {    
    countDownDate = selectedDates[0];
    console.log(countDownDate);         
  },  
};

flatpickr(refs.input, options);
console.log(flatpickr(refs.input, options));

let currentDate = options.defaultDate;
console.dir('defaultDate:', currentDate);

refs.btn.addEventListener("click", handleButtonClick);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addZero(Math.floor(ms / day));
  const hours = addZero(Math.floor((ms % day) / hour));
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addZero(number) {
  return String(number).padStart(2, 0); 
};

function countDownTime() {
  const now = new Date();
  const diff = countDownDate - now;
  // console.log('diff', diff);  
  convertMs(diff);  
  refs.days.textContent = addZero(convertMs(diff).days);  
  refs.hours.textContent = addZero(convertMs(diff).hours); 
  refs.minutes.textContent = addZero(convertMs(diff).minutes);
  refs.seconds.textContent = addZero(convertMs(diff).seconds);
};

function handleButtonClick(event) {  
  // event.preventDefault(); 
  flatpickr(refs.input, options);
  console.dir(refs.input);  
  console.log(refs.input.value);
  if (countDownDate) {    
    console.log(countDownDate);  
    const diff = countDownDate - currentDate;  
    console.log('diff+:', diff);
    if (diff < 0) {
      window.alert("Please choose a date in the future");
      return;
      } else {    
    setInterval(countDownTime, 1000);
    refs.btn.disabled = true;
    };
  };
};