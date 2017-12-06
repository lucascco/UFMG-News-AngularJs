# AngularJs UFMG News

Prezados,

Este projeto é um painel desenvolvido em **AngularJs 1.6.7** como objetivo de gerenciar as noticias do departamento de comunicação da UFMG. Ele segue o [style guide do Jonh Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modules) por permitir escalabilidade, organização dos códigos e facilidade de manutenção. Utilizo o [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/) em algumas telas como framework css e uso o [generator-webapp 3.0.1] (https://github.com/yeoman/generator-webapp/blob/master/docs/README.md) como gerador da estrutura básica de um projeto web.

## Segue a estrutura principal do site:

**app** Contem todos os arquivos do site.

**app - modules** Toda página é dividida em módulos que contém os seguintes arquivos:
* Configuração de rotas terminando em routes.js
* Controller terminando em controller.js
* Service terminando em service.js para requisições com o servidor
* Configuração dos endpoints com os endereço do endpoint utilizados na pagina.
* Pagina html
* Configuração do módulo que agrupa todos os componente descritos acima.

**app - modules - app** Módulo principal da aplicação, carrega todos os módulos do site. Segue a mesma estrutura de módulos acima com exceção do template html.

**app - modules - parts** Contém os templates principais do site como cabeçalho, area externa (login) e area interna (painel).

**app - styles** Contém o arquivo scss principal do site como os componentes scss responsáveis por cada página.

## Requisitos para rodar o projeto

É necessário ter o [NodeJS 7+](https://nodejs.org/en/), NPM 5+ e [git](https://git-scm.com/).


##Versões no momento de desenvolvimento desse projeto:
`npm --version && node --version && git --version`
npm - 5.5.1
node - v7.4.0
git version 2.7.4
 

## Instalação do projeto via terminal

1.  Clone o código fonte:

    `git clone https://github.com/lucascco/UFMG-News-AngularJs`

2.  Instalando as dependências (na raiz do projeto):

    `npm i -g gulp-cli`

    `npm i -g bower`

    `npm i`

    `bower install`

    Em sistemas unix, instalãções feitas globalmente (-g) podem precisar do sudo.

3.  Executando o projeto, o navegador padrão será iniciado na url http://localhost:9000, após o camando abaixo:

    `gulp serve`


### AngularJS - Vantagens:

1.  Um framework 100% javascript.
2.  Escalabilidade e poder de manipulação do DOM e do data binding.
3.  Arquitetura MVC
4.  Componentização facilitando o entendimento e a manutenção.
5.  Baixa curva de aprendizado.
6.  Usado pelo Ionic 1 para construção de aplicativos híbridos, diminuindo a curva de aprendizados para desenvolvimento mobile por parte de desenvolvedores AngularJs.

### AngularJS - Desvantagens:

A grande desvantagem que vejo no momento é ser um framework ultrapassado. Apesar das features implementadas na versão 1.6 pela equipe do Angular trazendo algumas funcionalidade interessantes como Pipe para data e o debounce para inputs, ele tem limitações para as tendencias atuais e naturalmente vem perdendo força com as constantes atualizações semestrais do seu sucessor [Angular 2+](https://angular.io/) e também de outros frameworks como o [Vue.js](https://vuejs.org/).

Qualquer dúvida entrar em contato pelo email: [lucasccorrea@gmail.com](mailto:lucasccorrea@gmail.com)

