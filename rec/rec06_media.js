const entrada = require("readline-sync");

let acumulador = 0;

for (let i = 0; i < 6; i++) {
    const tempo = entrada.questionFloat(`Digite o tempo do atendimento numero ${i + 1}: `);
    acumulador += tempo;
}

const media = acumulador / 6;

console.log("\n=== RESULTADO DOS ATENDIMENTOS ===");
console.log(`Tempo total: ${acumulador.toFixed(2)}`);
console.log(`Média de tempo: ${media.toFixed(2)}`);