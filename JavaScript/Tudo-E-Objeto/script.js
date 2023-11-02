var nome = 'Diego';
var nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo)


var numero = 11.8.toFixed();
console.log(numero);


var botao = document.querySelector('.btn');

botao.classList.add('azul') // adiciona a classe azul
botao.innerText; // 'Clique'
botao.addEventListener('click', function() {
  console.log('Clicou')
})


