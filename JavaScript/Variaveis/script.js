// var (escopo global) - escopo fora do bloco
var nome = "Diego";

// let (escopo local) - escopo restrito ao bloco
let idade = 31;

// const (não permitindo reatribuição e nem redeclaração)
const PossuiFaculdade = true;

console.log(nome, idade, PossuiFaculdade);


// fazendo contas
var preco = 25;
var quantidade = 5;

var total = preco * quantidade;

console.log("R$ " + total+",00");


// utilizar virgula para criar mais uma variavel sem precisar sar var novamente
var sobrenome = "Melo", cidade = "São Paulo"

console.log(sobrenome, cidade);


// declarar variavel sem valor
var semDefinir;
//retorna undefined
console.log(semDefinir);

