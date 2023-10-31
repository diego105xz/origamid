// captura a largura da tela e atribui a uma variavel
const larguraTela = window.innerWidth;
// ---------------------------------------


function coorcenadaMouse(event){
    // cria um objeto pegando coordenada x e y 
    const coordenadas = {
        x: event.x,
        y: event.y
    }
    // imprimi coordenada
    console.log(coordenadas);
}

// usa aviaravel js para adiconar um evento e funcao
window.addEventListener("mousemove", coorcenadaMouse);