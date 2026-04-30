// Number() converte a string do prompt em número inteiro.
let nivel = Number(prompt("Digite um número (1, 2 ou 3):"));

// switch compara o valor da variável com cada "case".
// É uma alternativa mais organizada ao if/else if quando
// se tem vários valores exatos para comparar.
switch (nivel) {
  case 1:
    // Executado quando nivel === 1
    alert("Iniciante");
    break; // break interrompe o switch; sem ele, o código "cai" para o próximo case

  case 2:
    // Executado quando nivel === 2
    alert("Intermediário");
    break;

  case 3:
    // Executado quando nivel === 3
    alert("Avançado");
    break;

  default:
    // default funciona como o "else": roda quando nenhum case bateu.
    // Aqui tratamos qualquer número fora de 1, 2 ou 3.
    alert("Número inválido. Digite 1, 2 ou 3.");
}
