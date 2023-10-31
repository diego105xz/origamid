
function seta(event){

    // criando coordenadas
    const movendo = {
        x: event.x,
        y: event.y
    }

    // atribuido a class a variavel
    const circulo = document.querySelector(".circulo");

    
   circulo.style.top = movendo.y + "px";
   circulo.style.left = movendo.x + "px";
}

window.addEventListener("mousemove", seta);