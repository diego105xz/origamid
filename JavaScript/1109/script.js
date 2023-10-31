// passo 1: criar variavel e atribuir as imagens
const imagens = document.querySelectorAll("#galeria ul img");



// passo 4: criar evento que troca uma imagen pela outra pelo clique
function galeriaTrocar(event){
    // criar variavel com imagem principal
    const principal = document.querySelector("#imagem-principal");

    // criar variavel que pega do evento o elemento clicado
    const clicada = event.currentTarget;

    // atribuindo a variavel principal o elemnto clicado com o atributo informado src ou alt
    principal.src = clicada.src;
    principal.alt = clicada.alt;

}


// passo 3:criar funcao com evento de click
function galeriaClique(img){
    // evento click
    img.addEventListener("click", galeriaTrocar);
}


// passo 2: criar loop para percorrer todas as imagens do array
imagens.forEach(galeriaClique);