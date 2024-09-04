/*
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que 
recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, 
quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

Saída
Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. 
No caso do salário, também deve haver um espaço em branco após o $.

    EXEMPLO DE ENTRADA | EXEMPLO DE SAIDA
    25                 |  NUMBER = 25
    100                |  SALARY = U$ 550.00
    5.50               |
    -------------------------------------
    1                  |  NUMBER = 1
    200                |  SALARY = U$ 4100.00
    20.50              |
    -------------------------------------
    6                  |  NUMBER = 6
    145                |  SALARY = U$ 2254.75
    15.55              |

*/

export function problem(lines) {
    const [funcionario, horasTrabalhadas, salarioHora] = lines.map(Number);
    const salario = horasTrabalhadas * salarioHora;
    console.log(`NUMBER = ${funcionario}\nSALARY = U$ ${salario.toFixed(2)}`);

    document.querySelector(".input-resp").innerHTML += `<span>NUMBER = ${funcionario}</span><span>SALARY = U$ ${salario.toFixed(2)}</span><hr>`
}