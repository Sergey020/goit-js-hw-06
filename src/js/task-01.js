const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:',itemEl.length);


const titlesEl = document.querySelectorAll('h2');


const x = titlesEl.forEach(element => {
    console.log('category :', element.textContent);
    console.log('Elements :', element.nextElementSibling.children.length);
});

