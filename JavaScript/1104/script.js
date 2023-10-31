// declarando em variaveis
const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkein";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const autorFilme = "Peter Jackson";


// declarando em objetos
const livro = {
    nome: "O Senhor dos Anéis",
    ano: 1954,
    autor: "J. R. R. Tolkein"
}

const filme = {
    nome: "O Senhor dos Anéis",
    ano: 2001,
    diretor: "Peter Jackson"
}


// visualizando o objeto completo
console.log(livro);


// visualizando somente uma propriedade do objeto
console.log(livro.nome);


// subtraindo para obter o dados de a quantos anos atras foi lançado
console.log(2023 - livro.ano);


// concatenando propriedades dentro do objeto
console.log(filme.nome + " do diretor " + filme.diretor);


// verificando se os dados são iguais
console.log(livro.nome === filme.nome);



// Tudo é objeto EXEMPLO
// const texto = {
//     innerHTML: "Esse texto."
// }
const texto = document.querySelector('p');
console.log(texto.innerHTML);

// acessando outra propriedade do objeto
console.log(texto.clientHeight);//propriedade que informa altura do elemento



// ate as variaveis internamente no javascript são objetos que possui propriedades e metodos EXEMPLO
console.log(autor.length);


// metodo ou função sao usado com parenteses
console.log(autor.toUpperCase());


// retona tudo minusculo
console.log(autor.toLowerCase());


// arredondando valor, porem retorna com string
const decimal = 2.99
console.log(decimal.toFixed() + 3);


//arredodando o valor e tranformando em numero
console.log(Number(decimal.toFixed()) + 3);


// usando metodos passandod e string para numero e de numero para string
const total = decimal.toFixed().length.toFixed().length;
console.log(total);