//7 TIPOS DE DADOS
//Todos são primitivos exceto os objetos.
var nome = 'Diego'; // String
var idade = 31; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//----------------------------------------------

//VERIFICAR TIPO DE DADO
var nome = 'Diego';
console.log(typeof nome);
// retorna o tipo de dado

//----------------------------------------------

//STRING
//Você pode somar uma string e assim concatenar as palavras.

var nome = 'Diego'
var sobrenome = 'Melo'
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

//----------------------------------------------

//STRING
//Você pode somar números com strings, o resultado final é sempre uma string
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log(frase);

//----------------------------------------------

//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido

//----------------------------------------------

//TEMPLATE STRING
var cesta = 500;
var frase1 = 'Kobe fez ' + cesta + ' cestas de três';
var frase2 = `Kobe fez ${cesta * 3} cestas de três`; // Utilizando Template String

console.log(frase2);

//----------------------------------------------
