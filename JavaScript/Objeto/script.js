var pessoa = {
  nome: 'André',
  idade: 28,
}

console.log(pessoa);





var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20


//console.table(quadrado);


Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14




var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';

var bg = menu.backgroundColor; // '#84E'
console.log(bg);



//ADICIONAR PROPRIEDADES E MÉTODOS
var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';



//PALAVRA-CHAVE THIS
//this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60


//PROTÓTIPO E HERANÇA
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false