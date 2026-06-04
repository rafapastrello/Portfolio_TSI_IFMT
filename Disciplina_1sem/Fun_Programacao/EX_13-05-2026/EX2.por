programa {
  funcao inicio() {
    inteiro i, cont, idade, soma, media

    i = 1
    soma = 0
    
    escreva("\nQuantas pessoas? ")
    leia(cont)

    enquanto(i <= cont){
      escreva("\n\n-- Informe a idade da ", i, "ª pessoa: ")
      leia(idade)



      soma += idade
      media = soma / i

      escreva("\nSoma das idades de ", i, " pessoas= ", soma)
      escreva("\nMédia das idades de ", i, " pessoas= ", media)

      i++
    }
  }
}
