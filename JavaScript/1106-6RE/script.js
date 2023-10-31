// CÓDIGO REFATORADO

// atribui a class a variavel
const circulo = document.querySelector(".circulo");

function moveMouse(event){
    // adicionando a variavel evento de stule top e left com px
    circulo.style.top = event.y + "px";
    circulo.style.left = event.x + "px";
}

// adicionando evento no window
window.addEventListener("mousemove", moveMouse);