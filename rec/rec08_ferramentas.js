const entrada = require("readline-sync");

const ferramentas = [];

for (let i = 0; i < 4; i++) {
    console.log(`\nCadastro da ferramenta ${i + 1}:`);

    const nome = entrada.question("Digite o nome da ferramenta: ");
    const quantidade = entrada.questionInt("Digite a quantidade disponível: ");
    const minimo = entrada.questionFloat("Digite o estoque mínimo: ");

    const ferramenta = {
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    };

    ferramentas.push(ferramenta);

}  

console.log("\n=== RELATÓRIO DE FERRAMENTAS ===");

for (let i = 0; i < ferramentas.length; i++) {
    const ferramenta = ferramentas[i];
    console.log(`\nFerramenta ${i + 1}:`);
    console.log(`Nome: ${ferramenta.nome}`);
    console.log(`Quantidade disponivel: ${ferramenta.quantidade}`);
    console.log(`Estoque minimo: ${ferramenta.minimo}`);
    
    const status = ferramenta.quantidade < ferramenta.minimo ? "REPOR!" : "ESTOQUE SUFICIENTE.";
    console.log(`Status: ${status}`);
    }
