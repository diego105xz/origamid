// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor){
    if(valor){
        return 'Valor é true';
    }else{
        return 'Valor é false'
    }
}

console.log(verificaValor('1'));//Valor é true

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
    return lado * lado
}

console.log(perimetro(4));//16


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    var nomeCompleto = nome +' '+ sobrenome;
    return nomeCompleto;
}

console.log(nomeCompleto('Diego', 'Melo')); //Diego Melo

// Crie uma função que verifica se um número é par
function verificaNumero(numero){
    if(numero % 2 == 0){
        return numero + ' é par';
    }else {
        return numero + ' é impar';
    }
}

console.log(verificaNumero(34));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
    console.log(typeof dado);
}

tipoDado(1);//number

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function scrollNome(){
    var nome = 'Diego';
    console.log(nome);
}

addEventListener('scroll',scrollNome);

//----------------------------------------------------
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