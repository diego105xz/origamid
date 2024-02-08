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

