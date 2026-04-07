const readline = require("readline-sync")

let freteGratis = 100 
let valorCompra = readline.questionFloat("Qual o valor da compra?")
let diferença = freteGratis - valorCompra

console.log("------Resultado------")
if(freteGratis < valorCompra){
    console.log(`você tem direito a Frete Grátis`)
}else{ 
    console.log(`você ainda precisa adicionar mais produtos para ter Frete Grátis`)

    console.log("------Resultado------")
    console.log(`falta ${diferença} reais para ter frete gratis`)
}