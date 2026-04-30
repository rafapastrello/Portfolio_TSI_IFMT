// Number() converte a string digitada em número.
let idade = Number(prompt("Digite sua idade:"));

// O operador ternário é um if/else em uma linha só.
// Formato:  condição ? "valor se verdadeiro" : "valor se falso"
//
// Aqui a condição é: idade >= 18
//   → se verdadeira: "Maior de idade"
//   → se falsa:      "Menor de idade"
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

// alert() exibe o resultado para o usuário.
alert(resultado);
