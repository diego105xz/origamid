// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

//scroll = scroll + 500;
//ou
scroll += 500

console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);

//ou

darCredito = (possuiCarro && possuiCasa)? 'Dar credito ao cliente' : 'Negar credito ao cliente';
console.log(darCredito);

//ou
if(possuiCarro && possuiCasa){
    darCredito = true;
    console.log('Dar credito ao cliente? ' + true);

}else{
    darCredito = false;
    console.log('Dar credito ao cliente?' + false);

}