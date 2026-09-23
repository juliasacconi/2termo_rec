const entrada = require("readline-sync");

const setores = [];

for (let i = 0; i < 6; i++) {
    console.log(`\nCadastro do setor ${i + 1}:`);

    const numero = entrada.questionInt("Digite o numero do setor: ");
    const utilidade = entrada.question("Digite a funcao do setor: ");

    const setor = {
        numero: numero,
        utilidade: utilidade
    };

    setores.push(setor);
}

console.log("\n=== RELATÓRIO DE SETORES ===");

for (let i = 0; i < setores.length; i++) {
    const setor = setores[i];
    console.log(`Setor n°: ${setor.numero} - Funcao: ${setor.utilidade}`);
}
