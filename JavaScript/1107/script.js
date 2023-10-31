const numero = 20;
//  a função Boolean() identifica se algo é true ou false
console.log(Boolean(numero));


// se atribui uma tag que não existe no html o resultado será false
const elemento = document.querySelector("body");
console.log(elemento);
console.log(Boolean(elemento));

// o || "ou" pelo menos uma das condições tem que ser verdadeira para executar
if(elemento || document.querySelector("p")){
    console.log("pelo menos uma das duas condições são verdadeira")
}

// o && "e" todas as condições tem que ser verdadeira para executar
if(elemento && document.querySelector("html")){
    console.log("todas as condições são verdadeira para executar")
}


// comprar expressão
const titulo = document.querySelector("h1");
const texto = titulo.innerText;

if(texto === "Bem vindo!"){
    console.log("Os textos estão iguais")
}