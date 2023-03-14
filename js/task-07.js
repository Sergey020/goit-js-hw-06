const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${fontSizeControlEl.value}px`;
console.log(textEl.style.fontSize);

fontSizeControlEl.addEventListener('input', event => {
  textEl.style.fontSize = `${event.target.value}px`;
});