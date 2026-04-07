// ------ Importar Biblioteca -----

const readline = require ("readline-sync")

let nota = 7 
let objetivo = readline.questionInt("qual foi a sua nota?")

console.log("----------Resultado---------")

if (nota >= objetivo){
    console.log("você foi aprovado")
} else {
    console.log("você foi reprovado")
}