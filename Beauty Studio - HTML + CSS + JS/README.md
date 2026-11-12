# Beauty Studio Kátia Souza

Site institucional desenvolvido para o Beauty Studio Kátia Souza como parte de um projeto acadêmico, com o objetivo de apresentar os serviços oferecidos pelo estúdio, fortalecer sua presença digital e facilitar o contato e as solicitações de agendamento por meio do WhatsApp.

## Sobre o projeto

O Beauty Studio Kátia Souza é um projeto de desenvolvimento web voltado para um estúdio de beleza especializado em cuidados com as unhas.

A proposta é oferecer aos visitantes uma experiência simples, elegante e intuitiva, permitindo conhecer o estúdio, visualizar os serviços, conferir trabalhos realizados e solicitar um horário de atendimento.

O projeto foi desenvolvido utilizando tecnologias fundamentais do desenvolvimento web, priorizando organização, responsividade e facilidade de navegação.

## Tecnologias utilizadas

- **HTML5:** estruturação e organização do conteúdo das páginas.
- **CSS3:** estilização, identidade visual, layout e responsividade.
- **JavaScript:** interatividade e funcionalidades do formulário de agendamento.

## Identidade visual

O projeto utiliza uma identidade visual minimalista, denominada *Gray Minimal*, com uma paleta de cores neutras e uma composição visual elegante.

As principais características são:

- Tons de branco, cinza e grafite.
- Tipografia Playfair Display para títulos.
- Tipografia Montserrat para textos, menus e botões.
- Layout limpo, com espaços bem distribuídos.
- Elementos visuais consistentes entre as páginas.

## Funcionalidades

O site é composto pelas seguintes páginas:

| Página | Descrição |
|---|---|
| Início | Apresentação do estúdio e destaque para os principais conteúdos. |
| Serviços | Exibição dos serviços oferecidos pelo estúdio. |
| Agendamento | Formulário para solicitar um horário de atendimento. |
| Sobre | Apresentação da profissional e de sua experiência. |
| Galeria | Exibição de fotografias dos trabalhos realizados. |
| Contato | Informações de contato, redes sociais e horários de funcionamento. |

### Formulário de agendamento

O formulário permite que o visitante informe:

- Nome completo.
- Telefone ou WhatsApp.
- Serviço desejado.
- Data preferencial.
- Horário desejado.
- Observações adicionais.

Após o preenchimento, o JavaScript organiza os dados em uma mensagem e direciona o visitante ao WhatsApp do estúdio, com a solicitação pronta para envio.

O campo de telefone também possui formatação automática para o padrão brasileiro `(00) 0 0000-0000`.

**Importante:** o formulário não realiza reservas automaticamente, não consulta disponibilidade em tempo real e não armazena informações em banco de dados. O agendamento depende do envio da mensagem pelo cliente e da confirmação do estúdio.

## Serviços apresentados

O site apresenta quatro categorias principais de serviços:

- Manicure tradicional.
- Esmaltação em gel.
- Alongamento de unhas.
- Nail art.

## Horário de funcionamento

- **Segunda a sexta-feira:** 07h às 18h.
- **Sábado:** 14h às 17h.
- **Domingo:** fechado.

## Estrutura do projeto

```text
Beauty-Studio-Katia-Souza/
│
├── index.html
├── servicos.html
├── agendamento.html
├── sobre.html
├── galeria.html
├── contato.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── Imagens/
    ├── Logo.png
    ├── FavIcon.png
    ├── manicure.jpg
    ├── gel.jpg
    ├── alongamento.jpg
    ├── nail-art.jpg
    └── imagens da galeria
```

*Observação: a estrutura acima representa a organização prevista para o projeto. Os nomes dos arquivos podem ser ajustados conforme a implementação final.*

## Como executar o projeto

Não é necessário instalar dependências ou configurar um servidor para visualizar a versão atual do site.

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Localize o arquivo `index.html`.
4. Abra o arquivo em um navegador de sua preferência.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

## Responsividade

O site foi planejado para oferecer uma experiência de navegação em diferentes tamanhos de tela, incluindo:

- Computadores.
- Notebooks.
- Tablets.
- Smartphones.

## Melhorias futuras

Como parte da evolução do projeto, estão previstas algumas possibilidades de aprimoramento:

- Integração com a plataforma Tua Agenda, caso exista suporte oficial para API ou integração externa.
- Consulta de horários disponíveis em tempo real.
- Registro automático de agendamentos.
- Validação de datas e horários conforme o funcionamento do estúdio.
- Implementação de um sistema de gerenciamento de agendamentos.
- Melhorias contínuas de acessibilidade e desempenho.

## Objetivo acadêmico

Este projeto tem como finalidade aplicar conhecimentos adquiridos no desenvolvimento web, especialmente em estruturação HTML, estilização CSS e programação JavaScript.

Além do aprendizado técnico, busca desenvolver uma solução digital funcional para um cenário real, considerando organização de conteúdo, experiência do usuário, identidade visual e necessidades de um pequeno negócio.

## Autor

**Guilherme**

Projeto acadêmico desenvolvido para o Beauty Studio Kátia Souza.

---

© 2026 Beauty Studio Kátia Souza. Todos os direitos reservados.
