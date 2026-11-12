// Backend de uma aplicação de cotação de moedas


programa {
  // Inclui a biblioteca de matemática para liberar a função de arredondar




  funcao inicio() {




    // Declaração de Constantes
    // Cotação do dia 03/11/26
    const real moeda_dolar = 5.50
    const real moeda_euro = 6.16
    const real moeda_bitcoin = 426000.00




    // Declaração de Variáveis
    real valor_real, valor_convertido
    real taxa = 0.1
    real valor_taxado
    inteiro opcao_moeda




  // 3. Apresentação do sistema
    escreva("==============Sistema de Cotação de Moedas===============\n")
    escreva("*                                                       *\n")
    escreva("Será cobrado o valor de 10% de taxa de cotação\n")
    escreva("*                                                       *\n")
    escreva("Qual o valor em Reais(R$) que o Sr(a) deseja converter: \n")
   
    leia(valor_real)


    // 4. Menu de opções


    escreva("Escolha a moeda na qual deseja converter seu valor: \n")
    escreva("\nDigite [1] para cotação em Dóllar\n")
    escreva("-----------------------------------\n")
    escreva("Digite [2] para cotação em Euro\n")
    escreva("----------------------------------\n")
    escreva("Digite [3] para cotação em Bitcoin\n")
    escreva("----------------------------------\n")
    escreva("Digite [0] para encerrar o sistema\n")
    escreva("----------------------------------\n")
    leia(opcao_moeda)




    // 5. Escolha da moeda
    escolha (opcao_moeda)
    {
    caso 0:
        escreva("Sistema encerrado!")
        pare
    caso 1:
        valor_taxado = valor_real * taxa
        valor_convertido = (valor_real - valor_taxado) / moeda_dolar
        escreva("\n\n========= Relatório da Cotação =========\n")
        escreva("\nO valor R$", valor_real - valor_taxado, " convertido para Dóllar foi: $", valor_convertido)
        escreva("\nO valor da taxa de cotação foi de: R$", valor_taxado)
        pare
    caso 2:
        valor_taxado = valor_real * taxa
        valor_convertido = (valor_real - valor_taxado) / moeda_euro
        escreva("\n\n========= Relatório da Cotação =========\n")
        escreva("O valor R$", valor_real - valor_taxado, " convertido para Euro foi: €", valor_convertido)
        escreva("\nO valor da taxa de cotação foi de: R$", valor_taxado)
        pare
    caso 3:
        valor_taxado = valor_real * taxa
        valor_convertido = (valor_real - valor_taxado) / moeda_bitcoin
        escreva("\n\n========= Relatório da Cotação =========\n")
        escreva("O valor R$", valor_real - valor_taxado, " convertido para Bitcoin foi: ₿", valor_convertido)
        escreva("\nO valor da taxa de cotação foi de: R$", valor_taxado)
        pare  
    }
  }
}

