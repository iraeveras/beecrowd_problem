/*
O seu primeiro programa em qualquer linguagem de programação normalmente é o "Hello World!". 
Neste primeiro problema tudo o que você precisa fazer é imprimir esta mensagem na tela.

Entrada
Este problema não possui nenhuma entrada.

Saída
Você deve imprimir a mensagem "Hello World!" e em seguida o final de linha, conforme o exemplo abaixo.
*/
export function problem(input) {
    console.log('Hello World');
    document.querySelector(".input-resp").innerHTML += `<span>Hello World</span>`
}