let counterValue = 0;
let step = 1;


const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', handleDecrementButtonEl);
counterEl.lastElementChild.addEventListener('click', handleIncrementButtonEl);

function handleDecrementButtonEl() {
    counterValue -= step;
    valueEl.textContent = counterValue;
    console.log(`Click on decrement button`);
};


function handleIncrementButtonEl() {
    counterValue += step;
    valueEl.textContent = counterValue;
    console.log(`Click on increment button`);
};