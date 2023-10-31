// CÓDIGO EXPLICADO
// function livro (nome, ano, autor){

//     const nomeMaiusculo = nome.toUpperCase();
//     const totalAnos = 2023 - ano;
//     const frase = nome + " por " + autor;

//     return objeto = {
//         nome:nomeMaiusculo,
//         totalAnos,
//         frase
//     };

// }


// CÓDIGO RESUMIDO
function livro (nome, ano, autor){

    return {
        nome:nome.toUpperCase(),
        totalAnos:2023 - ano,
        frase:nome + " por " + autor,
    };

}


const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno.frase)