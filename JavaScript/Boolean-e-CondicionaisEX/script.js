// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 31;
var idadePrimo = 28;


if(minhaIdade > idadePrimo){
    console.log('Eu sou mais Velho')

}else if(minhaIdade === idadePrimo){
    console.log('Temos a mesma idade')

}else{
    console.log('Eu sou mais novo')
}


// Qual valor é retornado na seguinte expressão? 
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //ture
var possuiDoutorado = false; //false
var empregoFuturo;//false
var dinheiroNaConta = 0; //false


console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil tem mais habitantes')
}else{
    console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { //false
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { //true
  console.log('Gato' && 'Cão'); //cão
} else {
  console.log('Falso');
}