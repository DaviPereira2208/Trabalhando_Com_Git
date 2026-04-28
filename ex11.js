const readline = require ("readline-sync")

let TamanhoTotal = 20

let qtBaixado = readline.questionInt("Quantos GB foram baixados:")

let percentual = (qtBaixado / TamanhoTotal) * 100

console.log("-------RESUlTADO-------")
console.log(`Fora carregados ${percentual}% do arquivo`)
