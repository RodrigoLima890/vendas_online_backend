## API para prover um e-commerce

# Tecnologias Usadas até o momento

## Nest js
## TypeScript
## TypeOrm
## Docker compose
## PostgreSql
## JWT
<hr/>

# Estruturas do NEST JS
## Modules
- Usados para agrupar os componentes relacionados como controllers e providers
## Controllers
- São os responsaveis por lidar com requisições HTTP e definir respostas corretas
##  Providers
- São classes que são injetadas como dependencia eles podem ser services, repositories, helpers e (ect)
## Services
- São providers que lidam com a parte da lógica de negócio. Serão úteis para prover uma camada a mais para separar a logica de negocio dos controllers.
- Serão injetadas nos controllers.
## Entities
- Represetam os modelos de dados que serão usados no ORM
  - DTO: Usei o DTO para tratar algumas respostas para o cliente, para retirar informações desnecessárias assim reduzindo o payload de alguns endPoints ou apenas melhorando a reposta
## Repositories
- São usados para gerenciar as operações com o banco de dados
- Eles encapsulam a lógica de acesso ao banco
## Decorator
- é um tipo de declaração que pode ser usada em vários lugares
- resulmindo é uma função que pode ser usada em vários lugares


<hr/>
  
# Instalação
```bash
$ npm install
```
# Rodando o aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
<hr/>

## Segurança
- Criei um modulo para servir como middleware de autenticação de token JWT(auth). Assim protejento as rotas privadas com os user guards do nest js

<hr/>

## License
Nest is [MIT licensed](LICENSE).
