// Number() converte o texto digitado pelo usuário em número,
// pois prompt() sempre retorna uma string.
let nota = Number(prompt("Digite sua nota (0 a 10):"));

// ATENÇÃO à ordem das condições: sempre checamos do maior para o menor.
// Se fizéssemos >= 5 primeiro, um aluno com nota 8 entraria ali
// e nunca chegaria no >= 7 — resultado errado!

if (nota >= 7) {
  // Entra aqui para notas 7, 8, 9 e 10.
  alert("Aprovado");
} else if (nota >= 5) {
  // Só chega aqui se a nota NÃO é >= 7, ou seja, está entre 5 e 6.9.
  alert("Recuperação");
} else {
  // Se não é >= 7 e não é >= 5, então é menor que 5.
  alert("Reprovado");
}
