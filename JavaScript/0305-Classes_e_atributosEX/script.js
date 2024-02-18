// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(function(item){
    item.classList.add('ativo');
});


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(function(item){
    
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img');

imagens.forEach(function(img){

    const possuiAtributo = img.hasAttribute('alt');

    console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.setAttribute('href', 'https://www.linkedin.com/in/diego-melo-1863971b2/');

console.log(linkExterno);