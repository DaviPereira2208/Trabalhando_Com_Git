//-------Importa Biblioteca --------
  
const readline = require ("readline-sync")

let idade = readline.question("informe a sua idade:")

console.log("--------Resultado--------")

if(idade >= 18){
    console.log ("Você pode entrar no evento")
}else {
    console.log("Você nâo pode entrar no evento")
}