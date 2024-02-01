// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeIrmao = 28;
var minhaIdade = 31;

if(minhaIdade > idadeIrmao){
    console.log('Sua idade é maior');

}else if( minhaIdade < idadeIrmao){
    console.log('Sua idade é menor');

}else{
    console.log('Sua idade é igual');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);//Resultado  é 3 pois foi o ultimo resultado true da expressão

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil tem mais habitantes');
}else{
    console.log('China tem mais habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//false pois Gato === gato vai dar false e 5>2 vai dar true e a soma das experessoes para dar verdadeiro precisa ser true && true

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//cão pois o if precisa que um resultado seja true para ocorrer que neste caso é 5>2, e na respota será cão por ser a ultima informação true,