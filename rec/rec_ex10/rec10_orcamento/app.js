const entrada = require("readline-sync");

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesOrcamento");

const nome = entrada.question("Nome do Cliente: ");
const valorMaterial = entrada.questionFloat("Valor do material: R$ ");
const horas = entrada.questionFloat("Horas de servico: ");

const maoDeObra = calcularMaoDeObra(horas);
const total = calcularTotal(valorMaterial, horas);
const desconto = verificarDesconto(total);

console.log("\n=== ORÇAMENTO ===");
console.log(`Nome do Cliente: ${nome}`);
console.log(`Material: R$ ${valorMaterial.toFixed(2)}`);
console.log(`Mão de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situacao do Desconto: ${desconto}`);