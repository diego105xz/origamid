// Array
const curso = ["HTML", "CSS", "JavaScript", "PHP"];

// local capturado do html
const lista = document.querySelector(".lista");


// função
function adicionarLista(item){

    // inserindo lista
    lista.innerHTML += "<li>" + item + "</li>"
}


// Array.forEach(função)
curso.forEach(adicionarLista)