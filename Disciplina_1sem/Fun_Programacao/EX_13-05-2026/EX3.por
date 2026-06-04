programa{
  funcao inicio(){
    inteiro i=1, qtd, num
    logico divisivel

    escreva("Por qual número você quer saber os divisíveis? ")
    leia(num)

    escreva("Quantos números divisíveis por ", num, " você quer saber? ")
    leia(qtd)

    faca{
      divisivel = (i % num) == 0

      escreva("\n", i, " - ")

      se (divisivel){
        escreva(i / num)
      }

      i++
    }enquanto(i <= qtd)
  }
}