var possuiGraduacao = true;

if(possuiGraduacao){
    console.log("é Graduado");

}else{
    console.log("Não tem graduação");
    var x = 10;//se a condição for false, atribui a x o valor de 10
}

console.log(x);//undefined



var nome = "";

if(nome){
    console.log("Nome exite");
}else{
    console.log("Nome não existe")
}

//Operador Lógico de Negação!
if(!true){}//false
if(!1){}//false
if(!''){}//true
if(!undefined){}//false
if(!' '){}//true
if(!!''){}//false



if(!possuiGraduacao){
    console.log("Não possui Graduação");
}


//Operadores de comparação
console.log(10 > 5);//true
console.log(10 > 10);//false
console.log(20 < 10);//false
console.log(10 <= 10);//true
console.log(10 >= 11);//false

var x = 10

console.log(x == 10);//true