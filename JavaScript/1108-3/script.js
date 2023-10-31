// Retorna todos os elementos que encontrar no criterio ("nav que contenha "a" dentro")
const links = document.querySelectorAll("nav a");

// função
function loghref(item){
    const href = item.href;

    console.log(href);
}

// Array.forEach(função)
links.forEach(loghref);



// passar o ultimo item do array
console.log(links[links.length - 1]);