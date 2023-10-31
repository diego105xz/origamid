// cursos aguardados em um array
const curso = ["JavaScript", "HTML", "CSS", "PHP"];

// atribuindo a class a uma variavel
const lista = document.querySelector(".lista");

// loop
for(let index = 0; index < curso.length; index++ ){

    // inserindo uma lista
    lista.innerHTML += "<li>" + curso[index] +"</li>"; 
}