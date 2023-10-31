const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

// print
console.log(produtos);

// pegar o link
console.log(produtos.href);

// pegar o texto
console.log(produtos.innerHTML);

//remove elemento do front
// produtos.remove();

// adicionar estilo
nav.style.backgroundColor = "black";
nav.style.padding = "1rem";

// adicionar uma class css em um item html
nav.classList.add("ativo");

// exibe no console propriedades e metodos que possui
console.dir(nav);