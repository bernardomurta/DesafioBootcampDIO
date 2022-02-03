/*Entrada
A entrada consiste de uma linha com quatro números inteiros T1, T2, T3, T4, indicando o número de tomadas de cada uma das quatro réguas (2 ≤ Ti ≤ 6).

Saída
Seu programa deve produzir uma única linha contendo um único número inteiro, indicando o número máximo de aparelhos que podem ser conectados à energia num mesmo instante.*/

let lines = gets().split('\n')

let line = lines.shift().split(' ')
var T1 = parseInt(line[0])
var T2 = parseInt(line[1])
var T3 = parseInt(line[2])
var T4 = parseInt(line[3])

console.log(T1 + T2 + T3 + T4 - 3)
