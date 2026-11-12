# ☠️ FURIA CS2 --- Versão HTML + CSS

## Sobre o projeto

O **FURIA CS2** é um site informativo desenvolvido com HTML e CSS como
atividade acadêmica do curso de Java do SENAI. A página reúne conteúdos
sobre a equipe FURIA de Counter-Strike 2, incluindo composição do time,
estatísticas, títulos, melhores momentos e próximos confrontos.

Nesta versão, a estrutura do conteúdo fica no arquivo HTML, enquanto a
maior parte da apresentação visual é definida em uma folha de estilos
externa (`style.css`). Essa separação facilita a organização, a
manutenção e a reutilização dos estilos.

## Funcionalidades e conteúdo

-   **Apresentação da equipe:** título, logotipo e banner da FURIA.
-   **Composição do time:** tabela com nomes, apelidos, funções e
    nacionalidades dos integrantes.
-   **Estatísticas:** link externo para a página da equipe no portal
    HLTV.
-   **Títulos:** lista de campeonatos e colocações apresentadas no site.
-   **Melhores momentos:** texto sobre uma partida e área destinada à
    exibição de vídeo do YouTube.
-   **Próximos confrontos:** tabela com campeonato, confronto, fase e
    horário/status.
-   **Estilização visual:** layout escuro, tabelas, botões com efeitos
    de hover, espaçamentos e organização da seção de vídeo.

## Tecnologias utilizadas

-   **HTML5:** estruturação do conteúdo e dos elementos da página.
-   **CSS3:** estilização externa, com regras para cores, tipografia,
    tabelas, botões, espaçamento e organização dos elementos.

Não há arquivos JavaScript, backend ou banco de dados nesta versão.

## Estrutura de arquivos

``` text
Site Furia - HTML + CSS/
├── site.html
├── style.css
├── Logo.png
├── furia icon.png
├── Furia.jpg
├── Imagem cs2.png
├── Plano de fundo.png
└── Plano_de_fundo_half_trans.png
```

## Como executar

1.  Baixe ou clone o repositório.
2.  Mantenha o arquivo `site.html`, o arquivo `style.css` e as imagens
    na estrutura de pastas apresentada.
3.  Abra o arquivo `site.html` em um navegador de internet.

O HTML já referencia a folha de estilos externa por meio de:

``` html
<link rel="stylesheet" href="style.css">
```

Por isso, é importante manter o nome `style.css` e sua localização
conforme o caminho indicado no HTML.

Não é necessário instalar dependências ou configurar um servidor para
visualizar a página localmente.

## Recursos externos

O site utiliza recursos hospedados em serviços externos:

-   **HLTV:** link para estatísticas da equipe ---
    https://www.hltv.org/team/8297/furia
-   **YouTube:** vídeo relacionado aos melhores momentos da partida.
-   **FlagCDN:** imagens das bandeiras utilizadas nas tabelas.

A disponibilidade desses recursos depende dos respectivos serviços e de
conexão com a internet.

## Organização do CSS

O arquivo `style.css` concentra as regras de apresentação da página,
incluindo:

-   Estilo geral do corpo e dos títulos.
-   Formatação de tabelas, cabeçalhos e linhas alternadas.
-   Efeitos de destaque ao passar o mouse sobre as linhas.
-   Aparência dos botões e links de destaque.
-   Organização da seção de vídeo em blocos de conteúdo.
-   Formatação de textos, imagens e rodapé.

## Observações

-   As informações sobre elenco, títulos e confrontos estão inseridas
    diretamente no HTML; não são atualizadas automaticamente.
-   O projeto é uma página estática e não possui integração com APIs.
-   As imagens locais precisam permanecer junto aos arquivos do site
    para que os caminhos relativos continuem funcionando.
-   O HTML utiliza uma URL do YouTube no atributo `src` do iframe. Para
    que o vídeo seja incorporado corretamente, deve ser utilizada a URL
    própria de incorporação
    (`https://www.youtube.com/embed/ID_DO_VIDEO`).

## Objetivo acadêmico

O projeto tem como finalidade praticar a criação de páginas web com HTML
e CSS, trabalhando conceitos de estruturação de conteúdo, tabelas,
listas, imagens, links externos e separação entre conteúdo e
apresentação visual.

------------------------------------------------------------------------

**Autor:** Guilherme Correia\
**Instituição:** SENAI\
**Projeto:** Site informativo sobre a FURIA no Counter-Strike 2
