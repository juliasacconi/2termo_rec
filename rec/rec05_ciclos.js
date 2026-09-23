const entrada = require("readline-sync");

const prodPorCiclo = entrada.questionInt("Digite a quantidade de produtos produzidos por ciclo: ");

console.log("\n=== RESULTADO DA PRODUÇÃO ==="); 

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    const producao = prodPorCiclo * ciclo;
    console.log(`Produção no ciclo ${ciclo} = ${producao}`);
}