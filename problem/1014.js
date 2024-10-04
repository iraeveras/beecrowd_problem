/*
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) 
e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), 
e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

EXEMPLO DE ENTRADA | EXEMPLO DE SAIDA
500
35.0               |  14.286 km/l
-------------------------------------
2254
124.4              |  18.119 km/l
-------------------------------------
4554
464.6              |  9.802 km/l

*/

export function problem(lines) {

    // SOLUÇÃO TRADICIONAL - OPÇÃO 01
    /*
    const valores = lines.map(Number)
    const [X, Y] = valores
    const consumo = X / Y
    console.log(`${consumo.toFixed(3)} km/l`);
    */

    // SOLUÇÃO TRADICIONAL - OPÇÃO 02
    /*
    const distancia = lines[0]
    const combustivel = lines[1]
    const consumo = distancia / combustivel
    console.log(`${consumo.toFixed(3)} km/l`);
    */
    // SOLUÇÃO MAIS AVANÇADA - OPÇÃO 03
    const consumo = (distancia, combustivel) => distancia / combustivel;
    const consumoMedio = consumo(...lines);
    console.log(`${consumoMedio.toFixed(3)} km/l`);

    document.querySelector(".input-resp").innerHTML += `<span>${consumoMedio.toFixed(3)} km/l</span><hr>`;
}