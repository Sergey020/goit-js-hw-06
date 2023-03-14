function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const btnDataCreateEl = document.querySelector('button[data-create]');
const btnDataDestroyEl = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(divEl);
    console.log(boxesEl);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

btnDataCreateEl.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  console.log(amount);
  createBoxes(amount);
});

btnDataDestroyEl.addEventListener('click', () => {
  destroyBoxes();
});