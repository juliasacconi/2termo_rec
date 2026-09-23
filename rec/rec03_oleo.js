const entrada = require("readline-sync");
const { total } = require("./rec02_materiais");

const oleo = entrada.questionInt("Digite a porcentagem de oleo:");

// if (oleo >= 40 && oleo <= 80) {
//     console.log("NÍVEL NORMAL ");
// }   
// else {
//     console.log("INSPEÇÃO NECESSÁRIA");
// }

console.log("\n=== VERIFICACAO DE OLEO ===");

console.log(`Porcentagem de oleo: ${oleo}%`);
console.log(`Verificação: ${oleo >= 40 && oleo <= 80 ? "NÍVEL NORMAL" : "INSPEÇÃO NECESSÁRIA"}`);
console.log(`Total: ${total}`);
