![logo-quero-edu-small](https://user-images.githubusercontent.com/1139813/90247813-c9cfc780-de0d-11ea-9a97-485a7212d9dd.png)

## Objetivo

O Quero Bolsa é um marketplace de bolsas de estudo, que já ajudou milhares de alunos a escolher e ingressar no curso ideal, por um preço que podem pagar. A sua missão é criar uma API para exibição e filtragem de ofertas de curso.

## Requisitos do Projeto

- Apenas código backend será considerado.
- Para a sua solução, você poderá usar a linguagem e framework que esteja mais familiarizado, de preferência Ruby, Elixir ou NodeJs.
- Você poderá usar bibliotecas de testes unitários ou ferramentas de build/migrations disponíveis para a linguagem que você escolher, mas não será aceita a utilização de bibliotecas com o propósito de resolver o problema.

## Especificações das Funcionalidades

- Utilizando a ferramenta adequada da sua linguagem/framework escolhida, crie de forma automatizada as tabelas do banco de dados relacional e mantenha o histórico de atualizações do schema.
- Automatize a inserção de dados fictícios para uso em ambiente de desenvolvimento.
- Implemente um endpoint para listar _cursos_. Permitindo filtrar pelo nome da universidade, kind, level e/ou shift.
- Implemente um endpoint que permita listar e filtrar _ofertas_. Permitindo filtrar pelo nome da universidade, nome do curso, kind, level, shift e/ou cidade. Além disso, deve ter a possibilidade de ordernar por menor e maior preço com desconto.
- O formato de retorno dos dados é JSON.

## Critérios de Avaliação

- Legibilidade
- Arquitetura e design da aplicação
- Performance
- Facilidade de evolução e manutenção da aplicação
- Testes automatizados
- Documentação

## Exemplo de Dados

Você pode visualizar o retorno esperado para o endpoint de ofertas no arquivo [db.json](db.json), anexo a este desafio.

A estrutura do JSON de ofertas é a seguinte:

```
  {
    "full_price": float,
    "price_with_discount": float,
    "discount_percentage": float,
    "start_date": string,
    "enrollment_semester": string,
    "enabled": boolean,
    "course": {
      "name": string,
      "kind": string,
      "level": string,
      "shift": string
    },
    "university": {
      "name": string,
      "score": float,
      "logo_url": string
    },
    "campus": {
      "name": string,
      "city": string
    }
  }
```

A estrutura do JSON de cursos é a seguinte:

```
  {
    "course": {
      "name": string,
      "kind": string,
      "level": string,
      "shift": string
      "university": {
        "name": string,
        "score": float,
        "logo_url": string
      },
      "campus": {
        "name": string,
        "city": string
      }
    }
  }
```

## Instruções para entrega do projeto

- Desenvolva e versione esse projeto utilizado git.
- Utilize o serviço de hospedagem de código de sua preferência: github, bitbucket, gitlab ou outro.
- Crie um README com instruções claras sobre como executar seu projeto.

## Bônus

- Implementar autenticação da API usando JWT
- Implementar cache nos endpoints
- Disponilizar sua aplicação online utilizando um serviço de sua preferência, como Heroku ou AWS, por exemplo

## Instruções

É possivel utilizar o comando Make para instalação e configuração do projeto, para isso siga os passos a seguir.

Copiar o `.env.example` e fazer as modificações necessarias

```sh
cp .env.example .env
```

Instalar as dependencias do projeto com o Make

```sh
make install
```

Com isso irá liberar a porta 9090 para acessar a api

Para testar a aplicação, é possivel utilizar o comando

```sh
make tests
```

# Utilizar o projeto sem o Make

Copiar o `.env.example` e fazer as modificações necessarias

```sh
cp .env.example .env
```

Instalar as dependências

```sh
yarn install
```

Rodar servidor web para a api

```sh
yarn start
```

Rodar os testes

```sh
yarn test
```

# Utilização

## Endpoints
Listagem de cursos
`/v1/courses`

Listagem de ofertas
`/v1/bids`


## Filtros e Ordernação

Os paramentros de filtros são os proprios campos da entidade em questão, para filtrar por uma atributo de uma relacionamento é preciso utilizar a seguinte estrutura :

Ex: 
Listagem de cursos com o level `x` e da universidade `y`

`/v1/courses?level=x&university[name]=y`

Listagem de cursos com o level `x`, da universidade `y` e do campus `z`

`/v1/courses?level=x&university[name]=y&campus[name]=z`

Para fazer ordernação, basta usar o parametro sort com o atributo da entidade em questão e a ordernação crescente(`asc`) ou decrescente(`desc`)

Ex: 
Listagem de bids com o curso `x` e ordernado pelo campo `price_with_discount` ordem crescente

`/v1/bids?course[name]=x&sort[price_with_discount]=asc`


