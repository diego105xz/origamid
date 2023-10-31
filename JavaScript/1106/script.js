// atribuir a classe a variavel
const ativar = document.querySelector(".ativar");


// como setar as diferentes propriedades e metodos event, desta forma quando colocar ponto vai aparecer as opções disponiveis no event
/** @param {MouseEvent} event */


// funcao com paramento que determina ações
function ativarBotao(event){
    console.log(event);
}


// atribui a variavel o tipoo de evento e a funcao
ativar.addEventListener("click", ativarBotao);