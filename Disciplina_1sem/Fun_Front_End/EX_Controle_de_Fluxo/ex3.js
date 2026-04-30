// prompt() abre uma caixinha no navegador pedindo que o usuário digite algo.
// O que o usuário digita sempre chega como texto (string), por isso usamos
// Number() para converter esse texto em número de verdade.
let numero = Number(prompt("Digite um número:"));

// if/else if/else testa as condições uma por uma, de cima para baixo.
// Assim que uma condição for verdadeira, o bloco dela é executado
// e o restante é ignorado.

if (numero > 0) {
  // Entra aqui quando o número é maior que zero (ex: 5, 100, 0.1)
  alert("Positivo");
} else if (numero < 0) {
  // Entra aqui quando o número é menor que zero (ex: -3, -0.5)
  alert("Negativo");
} else {
  // Se não é maior que 0 e não é menor que 0, só pode ser 0.
  // O else não precisa de condição — ele é o "caso contrário" final.
  alert("Zero");
}
