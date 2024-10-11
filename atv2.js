let vitorias = 10;
let derrotas = 5;

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 5) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 5 && saldoVitorias <= 10) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Prata";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 30) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 31 && saldoVitorias <= 40) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 41 && saldoVitorias <= 50) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 51) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

const resultado = calcularNivel(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
