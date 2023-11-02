// Crie uma função para verificar se um valor é Truthy
function analise(valor){
    return !!valor;
}

console.log(analise('1'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4;
}

console.log(perimetro(5));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Diego','Jesus Melo'))

// Crie uma função que verifica se um número é par

function verificaParImpar(numero){

    if(numero % 2 == 0){
      return console.log('O Número '+ numero +' é Par');
    }else{
      return console.log('O Número '+ numero +' é Impar');
    }
}

verificaParImpar(812)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof dado;
}

console.log(tipoDeDado('texto'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function mostrarNome(){
  var nome = 'Diego';
  return console.log('Bem vindo '+ nome);
}

addEventListener('scroll', mostrarNome);



// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
