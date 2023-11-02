function areaQuadrado(lado){
   return lado * lado;
}

console.log(areaQuadrado(2));

function pi(){
    return 3.14;
}

var total = 5 * pi(); // 15.7 
console.log(total.toFixed(2));


// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
  }
  
console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 80 e 1.80 são os argumentos
  

function corFavorita(cor) {
    
    if(cor === 'azul') {
      return 'Você gosta do céu';
    } else if(cor === 'verde') {
      return 'Você gosta de mato';
    } else {
      return 'Você não gosta de nada';
    }
  }

console.log(corFavorita('azul')); // retorna 'Você não gosta de nada'



//evento de click
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
function mostraConsole(){
    console.log('oi')
}

addEventListener('click', mostraConsole);
  



//funcao exetucanto direto e mandando consosole
function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc.toFixed(2));
}
  

imc2(83, 1.80); // retorna o imc
//console.log(imc(80, 1.80)); // retorna o imc e undefined  


function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
      return 'Informe a sua idade!';
    } else if(idade >= 60) {
      return true;
    } else {
      return false;
    }
}

console.log(terceiraIdade(65))


function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(totalPaises); // erro, totalPaises não definido


var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
 


imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}