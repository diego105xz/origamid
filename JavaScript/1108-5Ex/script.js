// pega todos os links dentro de "nav a" e coloca no array chamado de links
const links = document.querySelectorAll('nav a');

// funcao que ativa o link
function ativarLink(link){
    const href = link.href;
    const url = document.location.href;

    if(href === url){
        link.style.backgroundColor = "black";
        link.style.color = "white";
    }

}

// passa o array chamando a funcao
links.forEach(ativarLink);