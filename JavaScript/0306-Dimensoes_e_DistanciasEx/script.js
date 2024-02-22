// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img[src^="img/imagem1"]');

console.log('A distância entre o topo da página é a primeira imagem é ' + primeiraImg.offsetTop + ' em pixel.');

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    const imagens = document.querySelectorAll('img');

    let soma = 0;

    imagens.forEach(function(imagem){
        soma += imagem.offsetWidth

    })

    console.log('A soma da largura das imagens é ' + soma + ' pixel.');
}

window.onload = function(){
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach(function(link){
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'possui boa acessibilidade');

    }else{
        console.log(link, 'Não boa possui acessibilidade');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserMobile = window.matchMedia('(max-width: 720px)').matches;



if(browserMobile){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile')
}