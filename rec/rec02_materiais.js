
const entrada = require("readline-sync");

const peca = entrada.question("Nome da Peca: ");
const quantidade = entrada.questionInt("Quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Preco unitario: R$ ");

const total = quantidade * precoUnitario;

console.log("\n=== RELATORIO DA COMPRA ===");
console.log(`Material: ${peca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);