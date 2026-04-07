const readline = require ("readline-sync")

let TotalDePaginas = 300
 
let = qtdPaginasLidas = readline.questionInt ("Quantas paginas vocẽ leu?")

let percentual = (qtdPaginasLidas / TotalDePaginas) * 100

console.log("-------RESUlTADO-------")
console.log(`O usuario leu ${percentual}% do livro `)