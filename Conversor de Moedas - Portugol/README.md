# 💱 Conversor de Moedas

## 📌 Sobre o projeto

O **Conversor de Moedas** é um programa desenvolvido em **Portugol**, com o objetivo de realizar a conversão de valores em Reais (R$) para diferentes moedas internacionais.

O sistema permite ao usuário informar um valor em reais e escolher entre três opções de conversão: Dólar, Euro ou Bitcoin.

Além da conversão, o programa aplica uma taxa de cotação de 10% sobre o valor informado, descontando esse percentual antes de realizar o cálculo.

## 🚀 Funcionalidades

- Informar o valor em Reais (R$) que deseja converter.
- Converter Reais para Dólar (US$).
- Converter Reais para Euro (€).
- Converter Reais para Bitcoin (₿).
- Aplicar automaticamente uma taxa de cotação de 10%.
- Exibir um relatório com o valor convertido e a taxa cobrada.
- Encerrar o sistema por meio da opção 0.

## 💰 Cotações utilizadas

O programa trabalha com valores de cotação definidos diretamente no código-fonte.

| Moeda | Cotação |
|---|---:|
| Dólar | R$ 5,50 |
| Euro | R$ 6,16 |
| Bitcoin | R$ 426.000,00 |

**Observação:** As cotações estão fixadas no código e correspondem aos valores registrados no comentário do programa, referente a 03/11/2026. Portanto, não são atualizadas automaticamente.

## 🧮 Regra de cálculo

O sistema utiliza uma taxa de cotação de 10%.

O cálculo acontece em duas etapas:

**1. Cálculo da taxa:**

Taxa = Valor informado × 0,10

**2. Conversão da moeda:**

Valor convertido = (Valor informado − Taxa) ÷ Cotação da moeda

Dessa maneira, o sistema desconta a taxa antes de realizar a conversão.

## 🖥️ Como utilizar

Ao executar o programa, o usuário deverá:

1. Informar o valor em Reais (R$).
2. Escolher a moeda desejada no menu apresentado.
3. Aguardar o processamento da conversão.
4. Visualizar o relatório com o valor convertido e a taxa aplicada.

### Menu de opções

- `[1]` Converter para Dólar.
- `[2]` Converter para Euro.
- `[3]` Converter para Bitcoin.
- `[0]` Encerrar o sistema.

## 🛠️ Tecnologias utilizadas

- **Portugol:** Linguagem utilizada para desenvolver a lógica do programa.
- **Estruturas condicionais:** Utilização da estrutura `escolha/caso` para selecionar a moeda desejada.
- **Variáveis e constantes:** Armazenamento dos valores informados, taxas e cotações.
- **Operações matemáticas:** Cálculos de taxas e conversões monetárias.

## ▶️ Como executar

1. Faça o download do arquivo `Conversor de moedas.por`.
2. Abra o programa em um ambiente compatível com Portugol.
3. Execute o código.
4. Informe o valor desejado e selecione uma das opções disponíveis.

## 🎓 Objetivo acadêmico

Este projeto foi desenvolvido com finalidade acadêmica, visando colocar em prática conceitos fundamentais de lógica de programação, declaração de variáveis e constantes, estruturas condicionais, entrada e saída de dados e operações matemáticas.

---

**Projeto:** Conversor de Moedas  
**Linguagem:** Portugol  
**Finalidade:** Acadêmica