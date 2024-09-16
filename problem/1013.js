/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

    EXEMPLO DE ENTRADA | EXEMPLO DE SAIDA
    7 14 106           |  106 eh o maior
    -------------------------------------
    217 14 6           |  217 eh o maior

*/
export function problem (lines) {    
    /*
    // PRIMEIRA SOLUÇÃO
    const valores = lines[0].split(' ');
    const a = Number(valores[0]);
    const b = Number(valores[1]);
    const c = Number(valores[2]);
    const maiorAB = (a + b + Math.abs(a - b)) / 2;
    const maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;
    */

    // SEGUNDA SOLUÇÃO
    const valores = lines[0].split(' ').map(Number);
    const maior = (a,b) => (a + b + Math.abs(a - b)) / 2;    
    const maiorABC = valores.reduce(maior)
    
    console.log(`${maiorABC} eh o maior`);
    document.querySelector(".input-resp").innerHTML += `<span>${maiorABC} eh o maior</span><hr>`;
}