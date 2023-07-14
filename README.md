# Cervejeira API

A Cervejeira API é um microserviço para gerenciar estilos de cerveja e recomendar o estilo mais adequado com base na temperatura fornecida.

## Funcionalidades

- Listar estilos de cerveja
- Cadastrar novos estilos de cerveja
- Atualizar informações de um estilo de cerveja existente
- Excluir um estilo de cerveja
- Encontrar o estilo de cerveja mais adequado para uma determinada temperatura e obter uma playlist relacionada a esse estilo

## Tecnologias utilizadas

- Node.js
- TypeScript
- MongoDB
- Spotify API
- Zod
- AWS
- Seed
- Jest

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão nodejs16.x)
- Usuario capaz de fazer deploy na aws segue links de ajuda:
  - [Create an AWS account](https://sst.dev/chapters/create-an-aws-account.html)
  - [Create an IAM user](https://sst.dev/chapters/create-an-iam-user.html)
  - [Configure the AWS CLI](https://sst.dev/chapters/configure-the-aws-cli.html)

## Instalação

1. Clone este repositório:

```bash
git clone git@github.com:brlga002/karhub.git
```

2. Acesse o diretório do projeto:

```bash
cd karhub
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

```
MONGO_URI=mongodb+srv://gabriellima1000:LhnnnvTRhbgSzm0n@cluster0.zafg75x.mongodb.net/KarhubService
JWT_APPLICATION_KEY="X400ftawaOPXDhF6FvLbHTVUy"
SPOTIFY_CLIENT_ID='ac95e78b2253443e9e2a75cbc97a88a2'
SPOTIFY_CLIENT_SECRET='cf64c8fce8f049f389040648ee8f2698'
```

5. Inicie o servidor:

```bash
npm run dev
```

O servidor estará em execução no ambiente aws mas é acessível localmente. Verifique o console para obter a URL local.

Uma versão da API está em produção: [Url servidor Produção](https://420hawsrej.execute-api.us-east-1.amazonaws.com)

## Uso

A API oferece documentação com Swagger.

No console, aparecerá uma URL do SwaggerUrl, por exemplo:

```bash
SwaggerUrl: https://d55gp2ajpl0ne.cloudfront.net
```

### Exemplo das rotas - existem rotas públicas e privadas:

Rota para listar os estilos de cerveja:
![Rota para listar os estilos de cerveja](assets/routes.png)

Rota para acessar o tipo de cerveja e playlist (pública):
![Rota para acessar o tipo de cerveja e playlist](assets/beer-style.png)

Para acessar as rotas privadas, faça login para obter um token:
![Rota para obter um token](assets/get-token.png)

Informe o token para autorização no Swagger:
![Autorização no Swagger](assets/authorize.png)

Alguns comandos úteis:

1. Gerar uma nova documentação da sua API com base nos arquivos de schema:

```bash
npm run openapi
```

2. Gerar uma nova documentação com a opção watch para ouvir as alterações nos arquivos de schema:

```bash
npm run openapi:watch
```

3. Subir o Swagger em um servidor local na porta 9090:

```bash
npm run openapi-server
```

## Testes

Para executar os testes unitários:

```bash
npm run test
```

Para verificar erros de TypeScript:

```bash
npm run typecheck
```

Há um script no GitHub que executa testes para as Pull Requests, garantindo que nenhuma alteração seja mesclada sem testes.

## Deploy

O deploy é feito automaticamente na AWS toda vez que há alteração nas branches do GitHub através do [Seed](https://console.seed.run).

- A branch master é publicada para produção.
- A branch develop é usada para ambiente de homologação.
- O deploy automático requer que todos os testes sejam aprovados.

Você também pode fazer o deploy diretamente para a AWS com o comando:

```bash
npm run deploy
```

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
