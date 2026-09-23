const entrada = require("readline-sync");

const caixasPorHora = entrada.question("Quantidade produzida por hora: ");
const horasTurno = entrada.questionInt("Quntidade de horas trabalhadas: ");

const producaoTotal = caixasPorHora * horasTurno;

console.log("=== PRODUÇÃO DO TURNO ===");
console.log(`Producao por hora: ${caixasPorHora} caixas`);
console.log(`Horas do turno: ${horasTurno} horas`);
console.log(`Producao total: ${producaoTotal} caixas`);