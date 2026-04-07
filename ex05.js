 // ------Importar a Biblioteca------

 const readline = require("readline-sync")

 let objetivo = 500
 let dinheiroGuardado = readline.questionFloat ("Informe o valor guardado?")
 let diferança = objetivo - dinheiroGuardado

 //console.log(----------Resultado--------)

 if(dinheiroGuardado >= objetivo){
    console.log (`Parabens!! Você atingiu o objetivo`)
 }else{
    console.log (`Faltaram ${diferança} para atingir o objetivo`)
 }