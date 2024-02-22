//DOCUMENT OBJECT MODEL (DOM)
//É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
//window é o objeto global do browser
//possui diferentes métodos e propriedades

window.innerHeight; 
// retorna a altura do browser

//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

//window.alert('Isso é um alerta');

const href = window.location.href;

if (href === 'http://127.0.0.1:5500/origamid/JavaScript/0301-O_que_e_o_Dom/'){
    console.log('é igual o href');
}

const tituloH1 = document.querySelector('h1');

const h1class = tituloH1.classList;

//--------------------------------------------

//NODE
//Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

function callbackH1(){
    console.log('Clicou em', titulo.innerText);
}

titulo.addEventListener('click', callbackH1);
// ativa a função callback ao click no titulo