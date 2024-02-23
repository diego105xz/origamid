// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function linkAtivo(event){
    event.preventDefault();
    linksInternos.forEach(function(link){
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}


linksInternos.forEach(function(link){
    link.addEventListener('click', linkAtivo);

});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function selecioneElemento(event){
    console.log(event.currentTarget);
}

todosElementos.forEach(function(elemento){
    elemento.addEventListener('click', selecioneElemento);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const elementos = document.querySelectorAll('body *');

function removerElemento(event){
    event.currentTarget.remove();
}

elementos.forEach(function(elemento){
    elemento.addEventListener('click', removerElemento);
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function clickT(event){

    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', clickT);