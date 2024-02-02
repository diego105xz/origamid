//OBJETOS
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Diego',
    idade: 31,
    profissao: 'Programador',
    possuiFaculdade: true,
}

pessoa.nome; // 'Diego'
pessoa.possuiFaculdade; // true;

//Propriedades e métodos consistem em nome (chave) e valor

//---------------------------------------------------------

//MÉTODOS
//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },

    perimetro: function(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.lados); //4
console.log(quadrado.area(5)); //25
console.log(quadrado.perimetro(5)); //20

/*Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
    lados: 4,
    area(lado) {
      return lado * lado;
    },
    perimetro(lado) {
      return this.lados * lado;
    },
}

console.log(quadrado.area(5));

*/

//---------------------------------------------------------

//ORGANIZAR O CÓDIGO
//Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

//Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?