const entrada = require("readline-sync");

function calcularAproveitamento(util,total){
    return (util/total)*100;
}

function classificarAproveitamento(aproveitamento) {
    
    if(aproveitamento >= 90){
        return "Excelente!";
    }
    else if(aproveitamento >= 75 && aproveitamento <= 89.99){
        return "Adequado";
    }
    else {
        return "Insatisfatório";
    }
}

console.log("=== AVALIAÇÃO DE APROVEITAMENTO ===");

const total = entrada.questionFloat("Digite a quantidade de horas totais: ");
const util = entrada.questionFloat("Digite a quantidade de horas uteis: ");

const aproveitamento = calcularAproveitamento(util,total);
const classificacao = classificarAproveitamento(aproveitamento);

console.log(`Quantidade de horas totais: ${total}`);
console.log(`Quantidade de horas uteis: ${util}`);
console.log(`Aproveitamento percentual: ${aproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);