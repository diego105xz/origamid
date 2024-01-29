// Variaveis 

//var: Evite usar. Tem escopo de função, pode ser reatribuída e redeclarada.
var nome = 'Diego'; 

//let: Use quando precisar reatribuir a variável. Tem escopo de bloco e não pode ser redeclarada no mesmo escopo.
let idade = 31; 

// const: Use quando a variável não precisar ser reatribuída após a inicialização. Tem escopo de bloco e não pode ser redeclarada.
const possuiFaculdade = true;

// console.log() é usado para exibir as variáveis 
console.log(nome, idade, possuiFaculdade);

// ------------------------------------------------------

//Evitam repetições
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log('Valor total R$'+totalPreco+',00');

// ------------------------------------------------------

//Virgula
// Pode usar virgula para dividir as variaveis
var sobrenome = 'Melo',
    cidade = 'São Paulo';

console.log(sobrenome, cidade);

// ------------------------------------------------------

//Sem valor
//Pode declarar ela e não atribuir valor inicialmente

var precoAplicativo;

console.log(precoAplicativo);
//retorna undefined

// ------------------------------------------------------

/*
Informações sobre as variaveis

Os nomes podem iniciar com $, _, ou letras.
Podem conter números mas não iniciar com eles

Case sensitive
nome é diferente de Nome

Não utilizar palavras reservadas
https://www.w3schools.com/js/js_reserved.asp

Camel case
É comum nomearmos assim: abrirModal
*/

// ------------------------------------------------------

//Hoisting
//São movidas as variaveis para cima do código, porém o valor atribuído não é movido.
console.log(comida);
var comida = 'pizza';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retornar Designer

// ------------------------------------------------------

//MUDAR O VALOR ATRIBUÍDO
//É possível mudar os valores atribuídos a variáveis declaradas com var e let. 
//Porém não é possível modificar valores das declaradas com const

var  time = 'bayer';
time = 'Real Madrid';

console.log(time);

// ------------------------------------------------------
