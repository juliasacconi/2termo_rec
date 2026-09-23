const entrada = require("readline-sync");

const vibracao = entrada.questionFloat("Digite a frequencia da vibracao (mm/s): ");;

let classificacao;

if (vibracao <= 3) {
    classificacao = "Estável";
}
else if (vibracao > 3 && vibracao <= 6) {
    classificacao = "Atenção";
}
else {
    classificacao = "crítica";
}

console.log("=== CLASSIFICACAO DA VIBRAÇÃO ===");

console.log(`Valor da vibracao: ${vibracao} mm/s`);
console.log(`Classificacao: ${classificacao}`);