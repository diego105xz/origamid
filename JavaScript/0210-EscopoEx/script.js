// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
//console.log(var, marca, portas);

// Não existe uma variável com o nome "var", esse é o tipo de variável

// Como corrigir o erro abaixo?
const dois = 2;// trazer a variavel para fora da função

function somarDois(x) {
return x + dois;
}
function dividirDois(x) {
return x / dois; //alterar o operador de soma "+" para divisão "/"
}
somarDois(4);
dividirDois(6);

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50; //alterar de var para const

for(let numero = 0; numero < 10; numero++) { //alterar de var para let
console.log(numero);
}

const total = 10 * numero;
console.log(total);