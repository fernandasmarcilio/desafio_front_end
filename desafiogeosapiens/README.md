# Como rodar o projeto
Clone o reporitório
Vai para o diretório desafio_front_end/desafiogeosapiens
Rode o comando `yarn` para instalar as dependencias (Necessário ter o [yarn](https://yarnpkg.com/) instalado).
Rode o comando `yarn start` para rodar o projeto. O projeto vai rodar no navegador no [http://localhost:3000](http://localhost:3000).

# Estratégia
Primeiramente eu analisei o desafio, verificando o que ia ter e as funcionalidades. 
Em seguida fiz um protótipo de tela para me basear, o link esta [aqui](https://www.figma.com/file/RqKg8zzGzuL2RkMeiHY6Vk/desafio-front?node-id=0%3A1).
Depois iniciei o projeto com react, instalei algumas depedências que ja sabia que iria utilizar
- Axios: para chamada da web service. Eu fiquei insegura nessa parte pois não sabia o melhor jeito de lidar com esse web service, mas optei por usar axios pela experiência utilizando ele.
- react-router-dom: para navegação das páginas.
- styled-component: para estilização da página. É css-in-js, eu resolvi usar para ter maior consistencia com o projeto e experiência utilizando ele.

Dividi as tarefas em partes:
- Estilização da tela da estrutura do formulário.
- Chamada do web service e ajustes na estilização na página de estrutura do formulário
- Separação das estilizações em componentes da página de estrutura do formulário
- Estilização da página de respostas.
- Chamada do web service e ajustes na estilização na página de respostas.
- Separação das estilizações em componentes da página de respostas
- Por fim, coloquei reducers para gerenciamento dos estados.
