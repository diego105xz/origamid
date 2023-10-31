// pega a class e atribui a uma variavel
const botao = document.querySelector(".botao");

function mostrar(){
    // pega a class e atribui a variavel
    const texto = document.querySelector(".texto");

    // adicionamos a class mais uma class caso não exista com o metodo toggle
    // MTEDODO TOGGLE se existe ele remove, se não existe ele adiciona
    texto.classList.toggle("visivel");
}


// adiciona na variavel um evento e uma funcao
botao.addEventListener("click", mostrar);