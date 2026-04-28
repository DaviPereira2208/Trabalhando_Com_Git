//-----Avaliação de Desempenho de Colaboradores-----

const readline = require('readline-sync')

let meta = 10000

let funcionario = readline.question("Nome do funcionário: ")
let cargo = readline.question("Informe seu cargo: ")
let salario = readline.questionFloat("Informe seu Salário base: ")
let resultado = readline.questionFloat("Resultado alcançado no período(R$): ")

let calculo = ((resultado / meta * 100))
let diferenca = meta - resultado

console.log ("-----Resultado-----")

if(resultado >= meta){
    console.log(`Muito bem ${funcionario}, você atingiu a meta estabelecida!`)
}else{
    console.log(`${funcionario}, você não atingiu o objetivo! Faltou ${((diferenca / meta)* 100)}% para bater a meta estabelecida`)
}

console.log ("-----Bônus-----")

if(calculo < 70){
    console.log(`Status do Colaborador: Insuficiente`)
    console.log(`Bônus: 0%`)
    console.log(`Salário: Seu salário total será R$${salario}`)
}else if(calculo >= 70 & 99){
    console.log(`Status do Colaborador: Satisfatório`)
    console.log(`Bônus: 5%`)
    console.log(`Salário: Seu salário total será R$${salario * 1.05}`)
}else{
    console.log(`Status do Colaborador: Excelente`)
    console.log(`Bônus: 10%`)
    console.log(`Salário: Seu salário total será R$${salario * 1.10}`)
}