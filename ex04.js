 // ------Importar a Biblioteca------

 const readline = require("readline-sync")

let meta = 10000
let passos = readline.questionInt("Quantos passos você deu hoje?")
let diferença = meta - passos

//console.log(----------Resultado--------)

 if(passos >= meta){
    console.log(`Parabens!! Você atingiu a meta`)
    console.log(`Você passou ${Math.abs(diferença)} passos de metas`)
 } else {
    console.log(`Faltaram ${diferença} passos`)
 }
    

