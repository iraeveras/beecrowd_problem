/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, 
representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

    EXEMPLO DE ENTRADA | EXEMPLO DE SAIDA
    JOAO               |  TOTAL = R$ 684.54
    500.00             | 
    1230.30            |
    -------------------------------------
    PEDRO              |  TOTAL = R$ 700.00
    700.00             |  
    0.00               |
    -------------------------------------
    MANGOJATA          |  TOTAL = R$ 1884.58
    1700.00            |  
    1230.50            |

*/

export function problem(lines) {
    const [nome, salario, vendas] = lines.map(Number);
    const percentual = 0.15;

    const comissao = vendas * percentual;
    const totalSalario = salario + comissao;
    console.log(`TOTAL = R$ ${totalSalario.toFixed(2)}`);
    document.querySelector(".input-resp").innerHTML += `<span>TOTAL = R$ ${totalSalario.toFixed(2)}</span><hr>`;
}