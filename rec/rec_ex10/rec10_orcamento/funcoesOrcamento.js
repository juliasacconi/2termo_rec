function calcularMaoDeObra(horas) {
    const valorHora = 95;
    return horas * valorHora;
}

function calcularTotal(valorMaterial, horas) {
    const maoDeObra = calcularMaoDeObra(horas);
    return valorMaterial + maoDeObra;
}

function verificarDesconto(total) {
    if (total >= 1000) {
        return "10% DE DESCONTO";
    }
    else {
        return "SEM DESCONTO";
    }                                      
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
};