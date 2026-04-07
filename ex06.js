//  // ------Importar a Biblioteca------

//  const readline = require("readline-sync")

//  let horas = 40
//  let horasDeEstudo = readline.questionFloat ("Informe quantas horas voce estudou?")
//  let diferança = horas - horasDeEstudo

//   //console.log(----------Resultado--------)

//   if(horasDeEstudo >= horas){
//     console.log (`Parabens!! Você atingiu o objetivo`)
//  }else{
//     console.log (`Faltaram ${diferança} horas para atingir o objetivo`)
//  }


 // ------ importar biblioteca

 const readline = require("readline-sync")

 let horas = 40 
 let horasDeEstudo = readline.questionFloat ("Informe quantas horas voce estudous?")
 let diferança = horas - horasDeEstudo

 //console.log(-------Resultado-----)

 if(horasDeEstudo >= horas) {
    console.log (`Parabens!! Você atingiu a suas horas de estudo`)
 }else{
    console.log (`Faltaram ${diferança} horas para atingir o seu objetivo `)
 }