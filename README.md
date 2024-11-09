# Pokédex [WebPage](https://arturllopes.github.io/Desafio-PokedexApi-DIO/)
Projeto criado para conclusão do curso (Ri Happy - Front-end do Zero) de lógica de programação com Javascript da DIO.

<div align="center">
  <img src="https://github.com/user-attachments/assets/19cbd011-4003-4fbc-8ba2-55346dc07c2a"  wigth="200px" />
   
</div>

Esta página web é uma implementação  de uma Pokédex, construída com **HTML**, **CSS** e **JavaScript**. A Pokédex exibe uma lista de Pokémons, com a possibilidade de carregar mais itens conforme necessário. A aplicação usa a PokéAPI para buscar os dados de cada Pokémon e apresenta as informações de forma organizada e intuitiva.
<br>
Para o desafio proposto, foi adicionado esse card com os status dos pokémons, além de alterar as sprites de cada um.

<div align="center">
   
  <img src="https://github.com/user-attachments/assets/4d4904c5-d847-4696-b7ab-9894773e7510" wigth="200px" />
</div>

## Tecnologias Utilizadas

-   **HTML**: Estruturação do conteúdo e elementos da página.
-   **CSS**: Design responsivo e estilização usando um tema moderno e minimalista, com suporte a fontes externas (Roboto) e a biblioteca Normalize.css para garantir consistência entre diferentes navegadores.
-   **JavaScript**: Manipulação da DOM, integração com a PokéAPI e implementação da funcionalidade de carregamento dinâmico de Pokémons.

## Funcionalidades

-   **Visualização da lista de Pokémons**: A lista é carregada dinamicamente com a opção de exibir mais Pokémons por meio de um botão de "Next Generation".
-   **Paginação simples**: A página permite carregar mais Pokémons sem recarregar a página.

## Estrutura do Projeto

-   `index.html`: Estrutura principal da página, incluindo referências aos arquivos CSS e JavaScript.
-   `src/css/`: Contém os arquivos de estilização (`global.css` e `pokedex.css`).
-   `src/js/`: Contém os arquivos JavaScript responsáveis pela lógica da aplicação, incluindo a interação com a PokéAPI (`PokemonModel.js`, `poke-api.js`, `main.js`).
