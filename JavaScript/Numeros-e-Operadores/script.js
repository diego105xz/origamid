var digito = 31e5; //numero exponencial 3100000
console.log(digito);

//Operadores aritméticos
var soma = 100 + 50; //150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //resto da divisão 4 


//Operadores aritméticos(Strings)
var soma = '100' + 50; //15050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; //200
var divisao = '100' / 2; //50
var divisao2 = 'comprei 100' / 2; //NAN (Not a Number)

console.log(isNaN (divisao2)); // verifica se é NAN retornando true ou false


// pode ser priorizado uma conta colocando ()
// ordem parênteses, potências, multiplicações e divisões e adição e subtração.
var conta = 10 + 10 + 20 + 30 * 4 / (2 + 10);
console.log(conta);


// Operadores aritmeticos unários
var incremento = 5;

console.log(incremento++); //vai imprimir 5 e depois incrementar 6
console.log(++incremento);// vai incrementar 7 e depois vai imprimir 7


// transforma string em numero
var idade = "31";
var somaIdade = 5;
// o sinal de + ou - na frente da string tenta transformar a string e numero
console.log(+idade + 5);



