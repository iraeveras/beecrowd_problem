/*Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

    EXEMPLO DE ENTRADA | EXEMPLO DE SAIDA
    5                  |  DIFERENCA = -26
    6                  |
    7                  |
    8                  |
    -------------------------------------
    0                  |  DIFERENCA = -56
    0                  |
    7                  |
    8                  |
    -------------------------------------
    5                  |  DIFERENCA = 86
    6                  |
    -7                 |
    8                  |

*/

export function problem(lines) {
    const [valorA, valorB, valorC, valorD] = lines;
    const diferenca = (valorA * valorB) - (valorC * valorD);
    console.log(`DIFERENCA = ${diferenca}`);

    document.querySelector(".input-resp").innerHTML += `<span>DIFERENCA = ${diferenca}</span>`
}
