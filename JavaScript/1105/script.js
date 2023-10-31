// funcao sem paramentro
function logCurso(){
    const nome = "JavaScript";
    console.log(nome);
}

logCurso();


// funcao com paramentro
function exibirNome(nome){
    console.log(nome);
}

exibirNome("Diego");
exibirNome("Jessica");


// funcao com mais de um paramentro
function curso(nome, horas){
    console.log(nome, horas + " horas");
}

curso("HTML", 50);


// funcao com return
function carroModelo(carro){
    return carro;
}

const nomeVeiculo = carroModelo("Chevete");
console.log(nomeVeiculo);


// funcao retorna objeto
function treinoHoje(musculo, tempo){
    return{
        musculoTreino:musculo,
        tempoTreino:tempo + " minutos",
    };
}

const treino = treinoHoje("Perna", 120)
console.log(treino.musculoTreino, treino.tempoTreino);



// funcao retorna objeto mais limpo
function treinoAmanha(musculo, tempo){
    return{
        musculo,
        tempo,
    };
}

const exercicio = treinoAmanha("Costas", 60 + " minutos")
console.log(exercicio);


const filme = "Matrix";
// ESCOPO DA FUNCAO: as variaveis declarada fora da funç~´ao é de acesso global, mas as variaveis dentro da função é somente da função
function filmes(){
    const filme = "BATMAN";
    return filme;
}

const NomeFilme = filmes();
console.log(NomeFilme);