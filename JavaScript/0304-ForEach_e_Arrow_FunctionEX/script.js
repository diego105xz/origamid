// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');
paragrafo.forEach(function(item){
  console.log(item);
});

const paragrafos = document.getElementsByTagName('p');

const paragrafosArray = Array.from(paragrafos);

paragrafosArray.forEach(function(item){
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafo.forEach(function(item){
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

