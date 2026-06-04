programa {
  funcao inicio() {
    inteiro i, idade, soma = 0, media

    para(i = 1; i <= 4; i++){
      escreva("\n\n-- Informe a idade da ", i, "ª pessoa: ")
      leia(idade)

      soma += idade
      media = soma / i

      escreva("\nSoma das idades de ", i, " pessoas= ", soma)
      escreva("\nMédia das idades de ", i, " pessoas= ", media)
    }
  }
}
