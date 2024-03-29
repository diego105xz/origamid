// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: 'Diego',
    sobrenome: 'Melo',
    idade: 31,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um carteiro

var cachorro = {
    raça: 'Labrador',
    cor: 'preto',
    idade: 10,
    reacao: function(pessoa){
        if(pessoa === 'carteiro'){
            return 'Au au au!';

        }else {
            return 'Quer brincar'
        }
    }
}

console.log(cachorro.reacao('carteiro'))