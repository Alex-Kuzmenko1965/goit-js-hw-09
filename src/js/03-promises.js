import Notiflix from 'notiflix';

form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', onFormSubmit);

let delay = 0;
let step = 0;
let amount = 0;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {   
    const shouldResolve = Math.random() > 0.3;
    console.log(`${position}, ${delay}`);
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });        
      }}, delay);
  })
}

function onFormSubmit(event) {
  event.preventDefault();  
  // console.log(event.currentTarget.elements);
  delay = event.currentTarget.elements.delay.value;
  // console.log(delay);
  step = event.currentTarget.elements.step.value;
  // console.log(step);
  amount = event.currentTarget.elements.amount.value;
  // console.log(amount);
  for (let i = 1; i <= amount; i += 1) {
    const position = i;    
    delay = Number(delay) + Number(step);     
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };
};