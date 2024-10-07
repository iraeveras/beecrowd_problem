/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e
calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a
segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 4 casas decimais.

EXEMPLO DE ENTRADA | EXEMPLO DE SAIDA
1.0 7.0
5.0 9.0            |  4.4721
-------------------------------------
-2.5 0.4
12.1 7.3           |  16.1484
-------------------------------------
2.5 -0.4
-12.2 7.0          |  16.4575
*/

export function problem(lines) {
    const [x1, y1] = lines[0].split(' ').map(Number);
    const [x2, y2] = lines[1].split(' ').map(Number);

    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    console.log(distancia.toFixed(4));

    document.querySelector(".input-resp").innerHTML += `<span>${distancia.toFixed(4)}</span><hr>`;

}


// const inputValues = document.querySelector('.input').value

// function calcularDistancia(pontos) {
//     const [x1, y1, x2, y2] = pontos;
//     const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
//     return distancia.toFixed(4);
// }

// Exemplo de uso
// const pontos = [-2.5, 0.4, 12.1, 7.3];
// console.log(calcularDistancia(pontos)); // Saída: 4.4721