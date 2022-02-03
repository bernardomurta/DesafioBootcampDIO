/*Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.*/

let lines = gets().split('\n')

let N = parseInt(lines.shift())
if (N < 10000) {
  for (i = 1; i < 10000; i++) {
    if (i % N == 2) console.log(i) //escreva sua lógica nos espaços em branco
  }
}
